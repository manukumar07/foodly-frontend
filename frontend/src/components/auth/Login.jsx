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
import { Eye, EyeOff, Mail, Lock, ChefHat } from "lucide-react";
import toast from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Login successful! Welcome back to Foodly");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F97316]/5 via-[#FFFFFF] to-[#10B981]/5 flex items-center justify-center p-4 font-[Poppins]">
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        <div className="text-center">
          {/* Logo */}
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

          <h2 className="text-3xl font-bold text-[#111827]">Welcome back</h2>
          <p className="text-[#6B7280] mt-2">
            Sign in to your account to continue
          </p>
        </div>

        {/* Card */}
        <Card className="border-2 border-[#E5E7EB] shadow-xl rounded-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center text-[#111827]">
              Sign In
            </CardTitle>
            <CardDescription className="text-center text-[#6B7280]">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                    placeholder="Enter your password"
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

              {/* Remember Me + Forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded border-[#E5E7EB] focus:ring-[#F97316]"
                  />
                  <span className="text-[#6B7280]">Remember me</span>
                </label>
                <Link
                  to="/forgot-password"
                  className="text-[#F97316] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#F97316] to-[#10B981] hover:from-[#F97316]/90 hover:to-[#10B981]/90 h-12 text-lg font-semibold rounded-lg text-white"
              >
                Sign In
              </Button>
            </form>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-[#6B7280]">
                Don&apos;t have an account?{" "}
                <Link
                  to="/signup"
                  className="text-[#F97316] hover:underline font-semibold"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
