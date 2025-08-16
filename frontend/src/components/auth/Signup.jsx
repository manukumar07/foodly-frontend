import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye, EyeOff, Mail, Lock, User, Phone, ChefHat } from "lucide-react";
import toast from "react-hot-toast";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match. Please try again.");
      return;
    }
    toast.success("Account created successfully! Welcome to Foodly!");
    // Here you can also call your API to create the user
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F97316]/5 via-[#FFFFFF] to-[#10B981]/5 flex items-center justify-center p-4 font-[Poppins]">
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        {/* Header */}
        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 group mb-8"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#F97316] to-[#10B981] rounded-xl group-hover:scale-105 transition-transform duration-200">
              <ChefHat className="w-7 h-7 text-white" />
            </div>
            <span className="font-bold text-2xl bg-gradient-to-r from-[#F97316] to-[#10B981] bg-clip-text text-transparent">
              Foodly
            </span>
          </Link>
          <h2 className="text-3xl font-bold text-[#111827]">Create account</h2>
          <p className="text-[#6B7280] mt-2">
            Join Foodly and start ordering delicious food
          </p>
        </div>

        {/* Card Form */}
        <Card className="border-2 border-[#E5E7EB] shadow-xl rounded-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center text-[#111827]">
              Sign Up
            </CardTitle>
            <CardDescription className="text-center text-[#6B7280]">
              Create your account to get started
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#111827]">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="pl-10 border border-[#E5E7EB] hover:border-[#F97316] focus:border-[#F97316] focus:ring-2 rounded-lg transition-colors duration-300"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#111827]">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="pl-10 border border-[#E5E7EB] hover:border-[#F97316] focus:border-[#F97316] focus:ring-2 rounded-lg transition-colors duration-300"
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-[#111827]">
                  Phone Number
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="pl-10 border border-[#E5E7EB] hover:border-[#F97316] focus:border-[#F97316] focus:ring-2 rounded-lg transition-colors duration-300"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-[#111827]">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="pl-10 border border-[#E5E7EB] hover:border-[#F97316] focus:border-[#F97316] focus:ring-2 rounded-lg transition-colors duration-300"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4 text-[#6B7280]" />
                    ) : (
                      <Eye className="w-4 h-4 text-[#6B7280]" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-[#111827]">
                  Confirm Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                    className="pl-10 border border-[#E5E7EB] hover:border-[#F97316] focus:border-[#F97316] focus:ring-2 rounded-lg transition-colors duration-300"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-4 h-4 text-[#6B7280]" />
                    ) : (
                      <Eye className="w-4 h-4 text-[#6B7280]" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-center space-x-2 text-sm">
                <input
                  type="checkbox"
                  className="rounded border-[#E5E7EB]"
                  required
                />
                <span className="text-[#6B7280]">
                  I agree to the{" "}
                  <Link to="/terms" className="text-[#F97316] hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy"
                    className="text-[#F97316] hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </span>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#F97316] to-[#10B981] hover:from-[#F97316]/90 hover:to-[#10B981]/90 h-12 text-lg font-semibold rounded-lg text-white"
              >
                Create Account
              </Button>
            </form>

            {/* Already have account */}
            <div className="mt-6 text-center">
              <p className="text-[#6B7280]">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-[#F97316] hover:underline font-semibold"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
