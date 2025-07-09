"use client";

import { useState } from "react";

export const usePayment = () => {
  const [paymentState, setPaymentState] = useState({
    isProcessing: false,
    isSuccess: false,
    error: null,
  });

  const processPayment = async (phoneNumber, option) => {
    setPaymentState({ isProcessing: true, isSuccess: false, error: null });

    try {
      // Simulate M-PESA STK Push API call
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate 90% success rate
          if (Math.random() > 0.1) {
            resolve(true);
          } else {
            reject(new Error("Payment failed. Please try again."));
          }
        }, 2000);
      });

      setPaymentState({ isProcessing: false, isSuccess: true, error: null });
      return {
        success: true,
        message: `STK Push sent to ${phoneNumber} for KES ${option.price}`,
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Payment failed";
      setPaymentState({
        isProcessing: false,
        isSuccess: false,
        error: errorMessage,
      });
      return { success: false, message: errorMessage };
    }
  };

  const resetPayment = () => {
    setPaymentState({ isProcessing: false, isSuccess: false, error: null });
  };

  return { paymentState, processPayment, resetPayment };
};
