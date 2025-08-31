import React from "react";

interface ToastContentProps {
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

const ToastContent: React.FC<ToastContentProps> = ({ title, description, action }) => {
  return (
    <div className="flex flex-col gap-2 min-w-0">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-sm leading-tight text-black ">{title}</h4>
          {description && (
            <p className="text-sm text-gray-900 mt-1 leading-relaxed">{description}</p>
          )}
        </div>
        {action && (
          <button
            onClick={action.onClick}
            className="flex-shrink-0 px-3 py-1.5 text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20"
          >
            {action.label}
          </button>
        )}
      </div>
    </div>
  );
};

export default ToastContent;
