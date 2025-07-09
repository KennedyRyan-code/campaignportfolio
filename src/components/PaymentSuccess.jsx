"use client";

import { CheckCircle } from "./ui/Icons";
import { Button } from "./ui/button";

export const PaymentSuccess = ({ option, phoneNumber, onClose }) => {
  return (
    <div className="text-center p-6">
      <div className="mx-auto flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
        <CheckCircle className="w-8 h-8 text-green-600" />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Sent!</h2>
      <p className="text-gray-600 mb-6">
        STK Push sent to <span className="font-semibold">{phoneNumber}</span>{" "}
        for{" "}
        <span className="font-semibold text-amber-600">KES {option.price}</span>
      </p>

      <div className="bg-amber-50 rounded-lg p-4 mb-6 border border-amber-200">
        <div className="flex items-center justify-center gap-3">
          <span className="text-2xl">{option.emoji}</span>
          <div>
            <div className="font-medium">{option.name}</div>
            <div className="text-sm text-gray-600">
              Thank you for your support!
            </div>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-500 mb-6">
        Please check your phone and enter your M-PESA PIN to complete the
        payment.
      </p>

      <Button onClick={onClose} variant="success" className="w-full">
        Done
      </Button>
    </div>
  );
};
