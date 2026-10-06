'use client';

import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    social: "",
    message: "",
    eighteenPlus: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      // Simple email regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Invalid email address";
      }
    }

    if (!formData.social.trim()) {
      newErrors.social = "Social handle is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (!formData.eighteenPlus) {
      newErrors.eighteenPlus = "You must be 18+ to proceed";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    // Reset form after success
    setFormData({
      name: "",
      email: "",
      social: "",
      message: "",
      eighteenPlus: false,
    });
    setErrors({});
  };

  if (submitSuccess) {
    return (
      <section id="contact" className="pt-24 pb-16 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="interactive-card space-y-6 p-8 text-center">
            <h2 className="text-3xl font-serif text-foreground">
              Thank you for reaching out!
            </h2>
            <p className="text-muted-foreground">
              We've received your message and will get back to you shortly.
            </p>
            <Button variant="outline" onClick={() => setSubmitSuccess(false)}>
              Send another message
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="pt-24 pb-16 bg-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-foreground mb-8">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit} className="interactive-card space-y-6 p-6 sm:p-8">
          <div className="space-y-4">
            <Input
              label="Name or alias"
              placeholder="Name or alias"
              value={formData.name}
              onChange={(value) => setFormData({ ...formData, name: value })}
              error={errors.name || ""}
              className="w-full"
            />
            <Input
              label="Email address"
              placeholder="Email address"
              value={formData.email}
              onChange={(value) => setFormData({ ...formData, email: value })}
              error={errors.email || ""}
              className="w-full"
            />
            <Input
              label="Social handle"
              placeholder="Social handle (e.g., @username)"
              value={formData.social}
              onChange={(value) => setFormData({ ...formData, social: value })}
              error={errors.social || ""}
              className="w-full"
            />
            <Input
              label="Your message"
              placeholder="Your message"
              value={formData.message}
              onChange={(value) => setFormData({ ...formData, message: value })}
              error={errors.message || ""}
              className="w-full"
              rows={4}
            />
          </div>
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="eighteenPlus"
              checked={formData.eighteenPlus}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  eighteenPlus: e.target.checked,
                })
              }
              className="h-4 w-4 text-primary"
            />
            <label htmlFor="eighteenPlus" className="text-muted-foreground">
              I am 18 years of age or older
            </label>
            {errors.eighteenPlus && (
              <p className="mt-1 text-sm text-destructive">
                {errors.eighteenPlus}
              </p>
            )}
          </div>
          <Button
            variant="primary"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
}