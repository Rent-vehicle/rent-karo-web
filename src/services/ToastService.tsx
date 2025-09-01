import { toast, ToastOptions, ToastContent, ToastPosition } from "react-toastify";
import React from "react";
import ToastContentComponent from "@/components/ToastContent";

export enum ToastType {
  Success = "success",
  Error = "error",
  Info = "info",
  Warning = "warning",
}

export enum ToastStyle {
  Snackbar = "snackbar",
  Banner = "banner",
}

interface ShowToastOptions {
  title: string;
  description?: string;
  type?: ToastType;
  style?: ToastStyle;
  autoClose?: number | false; // false = persistent
  showCloseIcon?: boolean;
  position?: ToastOptions["position"];
  action?: {
    label: string;
    onClick: () => void;
  };
}

class ToastService {
  private static _instance: ToastService;

  static getInstance(): ToastService {
    if (!this._instance) {
      this._instance = new ToastService();
    }
    return this._instance;
  }

  showToast(
    title: string,
    type = ToastType.Info,
    style = ToastStyle.Snackbar,
    description?: string,
    autoClose = 4000,
    showCloseIcon = true,
    position: ToastPosition = "bottom-right",
    action?: { label: string; onClick: () => void }
  ) {
    const content: ToastContent = (
      <ToastContentComponent title={title} description={description} action={action} />
    );

    const toastOptions: ToastOptions = {
      type,
      position: style === ToastStyle.Banner ? "top-center" : position,
      autoClose: action ? false : autoClose, // Don't auto-close if action is present
      closeButton: action ? false : showCloseIcon, // Don't show close button if action is present
      hideProgressBar: action ? true : false, // Hide progress bar if action is present
    };

    toast(content, toastOptions);
  }

  showToastWithOptions(options: ShowToastOptions) {
    const content: ToastContent = (
      <ToastContentComponent
        title={options.title}
        description={options.description}
        action={options.action}
      />
    );

    const toastOptions: ToastOptions = {
      type: options.type || ToastType.Info,
      position:
        options.style === ToastStyle.Banner ? "top-center" : options.position || "bottom-right",
      autoClose: options.action ? false : (options.autoClose ?? 4000),
      closeButton: options.action ? false : (options.showCloseIcon ?? true),
      hideProgressBar: options.action ? true : false,
      toastId: `toast-${options.type || "info"}-${Date.now()}`,
    };

    toast(content, toastOptions);
  }

  dismiss(toastRef?: string | number) {
    toast.dismiss(toastRef);
  }

  isActive(toastId: string): boolean {
    return toast.isActive(toastId);
  }
}

export const toastService = ToastService.getInstance();
