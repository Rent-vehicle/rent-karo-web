"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/Button";
import Card from "@/components/Card";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <Card className="text-center">
          {/* 404 Icon */}
          <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl text-white font-bold">404</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-black mb-4">Page Not Found</h1>

          {/* Description */}
          <p className="text-gray-600 mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved,
            deleted, or you entered the wrong URL.
          </p>

          {/* Actions */}
          <div className="space-y-4">
            <Link href="/home">
              <Button variant="primary" fullWidth>
                Go to Home
              </Button>
            </Link>
          </div>

          {/* Help Text */}
          <p className="text-sm text-gray-500 mt-6">Need help? Contact our support team</p>
        </Card>
      </div>
    </div>
  );
}
