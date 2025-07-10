"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Modal } from "./ui/Modal";
import { Input } from "./ui/Input";
import { Coffee, Phone, ArrowLeft, XCircle } from "./ui/Icons";
import { CoffeeOptionCard } from "./CoffeeOptionCard";
import { PaymentSuccess } from "./PaymentSuccess";
import { usePayment } from "../hooks/usePayment";
import { formatPhoneNumber, validatePhoneNumber } from "../lib/phoneFormatter";

const coffeeOptions = [
  {
    id: 1,
    name: "Small Coffee",
    price: 350,
    emoji: "☕",
    description: "Perfect for a quick boost",
  },
  {
    id: 2,
    name: "Medium Coffee",
    price: 600,
    emoji: "☕☕",
    description: "Great for focused work",
  },
  {
    id: 3,
    name: "Large Coffee",
    price: 1200,
    emoji: "☕☕☕",
    description: "Fuel for big projects",
  },
];

export const BuyMeCoffee = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const { paymentState, processPayment, resetPayment } = usePayment();

  const handlePriceSelect = (option) => {
    setSelectedOption(option);
  };

  const handleBack = () => {
    setSelectedOption(null);
    setPhoneNumber("");
    setPhoneError("");
    resetPayment();
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedOption(null);
    setPhoneNumber("");
    setPhoneError("");
    resetPayment();
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
    if (phoneError) setPhoneError("");
  };

  const handlePayment = async () => {
    if (!selectedOption) return;

    if (!validatePhoneNumber(phoneNumber)) {
      setPhoneError("Please enter a valid Kenyan phone number");
      return;
    }

    const result = await processPayment(phoneNumber, selectedOption);

    if (!result.success) {
      setPhoneError(result.message);
    }
  };

  return (
    <>
      <Button
        size="lg"
        variant="primary"
        onClick={() => setIsOpen(true)}
        className="shadow-2xl hover:shadow-3xl transform hover:scale-105"
      >
        <Coffee className="mr-2 h-5 w-5" />
        Buy Me a Coffee
      </Button>

      <Modal isOpen={isOpen} onClose={handleClose} size="md">
        {paymentState.isSuccess ? (
          <PaymentSuccess
            option={selectedOption}
            phoneNumber={phoneNumber}
            onClose={handleClose}
          />
        ) : !selectedOption ? (
          // Price Selection Screen
          <div className="p-6">
            <div className="text-center mb-6">
              <h2 className="flex items-center justify-center gap-2 text-2xl font-bold mb-2">
                <Coffee className="h-6 w-6 text-amber-600" />
                Buy Me a Coffee
              </h2>
              <p className="text-gray-600">
                Choose your coffee size to support my work
              </p>
            </div>

            <div className="space-y-3">
              {coffeeOptions.map((option) => (
                <CoffeeOptionCard
                  key={option.id}
                  option={option}
                  onSelect={handlePriceSelect}
                />
              ))}
            </div>
          </div>
        ) : (
          // Mobile Number Input Screen
          <div className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBack}
                className="p-2 h-8 w-8 min-w-0 hover:bg-gray-100"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div>
                <h2 className="flex items-center gap-2 text-xl font-bold">
                  <Phone className="h-5 w-5 text-green-600" />
                  M-PESA Payment
                </h2>
                <p className="text-sm text-gray-600">
                  Enter your mobile number for STK Push
                </p>
              </div>
            </div>

            {/* Selected Coffee Summary */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 mb-6 border border-amber-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{selectedOption.emoji}</span>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {selectedOption.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {selectedOption.description}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-amber-600">
                    KES {selectedOption.price}
                  </div>
                  <div className="text-xs text-gray-500">Total amount</div>
                </div>
              </div>
            </div>

            {/* Phone Number Input */}
            <div className="mb-6">
              <Input
                label="Mobile Number"
                type="tel"
                placeholder="0712345678 or 254712345678"
                value={phoneNumber}
                onChange={handlePhoneChange}
                error={phoneError}
                helperText="Enter your Safaricom number for M-PESA payment"
                className="text-lg"
              />
            </div>

            {paymentState.error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
                <XCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <p className="text-sm text-red-700">{paymentState.error}</p>
              </div>
            )}

            <Button
              onClick={handlePayment}
              disabled={!phoneNumber || phoneNumber.length < 9}
              isLoading={paymentState.isProcessing}
              variant="success"
              className="w-full"
              size="lg"
            >
              {paymentState.isProcessing ? (
                "Sending STK Push..."
              ) : (
                <>
                  <Phone className="mr-2 h-4 w-4" />
                  Pay KES {selectedOption.price}
                </>
              )}
            </Button>

            <p className="text-xs text-center text-gray-500 mt-3">
              You will receive an M-PESA prompt on your phone
            </p>
          </div>
        )}
      </Modal>
    </>
  );
};
