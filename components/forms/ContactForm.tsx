"use client";

import { useActionState, useRef, useState } from "react";
import { sendContactEmailAction } from "@/actions/mail";
import { BudgetRange, MailActionResult } from "@/lib/types";

const BUDGET_OPTIONS: BudgetRange[] = [
  "₹10,000 – ₹50,000",
  "₹50,000 – ₹1,50,000",
  "₹1,50,000+",
  "Let's discuss",
];

const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10MB

const initialState: MailActionResult = {
  success: false,
  message: "",
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendContactEmailAction,
    initialState,
  );

  const [selectedBudget, setSelectedBudget] = useState<string>("Let's discuss");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [prevSuccess, setPrevSuccess] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Reset form inputs upon successful submission
  if (state.success && !prevSuccess) {
    setPrevSuccess(true);
    setSelectedFile(null);
    setFileError(null);
    setSelectedBudget("Let's discuss");
  } else if (!state.success && prevSuccess) {
    setPrevSuccess(false);
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    validateAndSetFile(file);
  };

  const validateAndSetFile = (file?: File) => {
    setFileError(null);
    if (!file) {
      setSelectedFile(null);
      return;
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      setFileError(
        "File size exceeds 10MB limit. Please select a smaller file.",
      );
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      return;
    }

    setSelectedFile(file);
  };

  const removeFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setSelectedFile(null);
    setFileError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <form
      ref={formRef}
      key={prevSuccess ? "submitted" : "form"}
      action={formAction}
      className="bg-card border border-chip/60 p-6 md:p-8 rounded-2xl flex flex-col gap-5 shadow-xl w-full"
    >
      {/* Status banner */}
      {state.message && (
        <div
          role="alert"
          className={`p-4 rounded-xl text-sm border transition-all ${
            state.success
              ? "bg-green/10 border-green/30 text-green"
              : "bg-red/10 border-red/30 text-red"
          }`}
        >
          {state.message}
        </div>
      )}

      {/* Grid: Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-text">
            Your Name <span className="text-primary">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="John Doe"
            disabled={isPending}
            className={`w-full bg-background border px-4 py-3 rounded-lg text-foreground placeholder:text-placeholder focus:outline-none transition-all ${
              state.errors?.name
                ? "border-red focus:border-red"
                : "border-chip focus:border-primary"
            }`}
          />
          {state.errors?.name && (
            <p className="text-xs text-red mt-0.5">{state.errors.name[0]}</p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-text">
            Email Address <span className="text-primary">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@example.com"
            disabled={isPending}
            className={`w-full bg-background border px-4 py-3 rounded-lg text-foreground placeholder:text-placeholder focus:outline-none transition-all ${
              state.errors?.email
                ? "border-red focus:border-red"
                : "border-chip focus:border-primary"
            }`}
          />
          {state.errors?.email && (
            <p className="text-xs text-red mt-0.5">{state.errors.email[0]}</p>
          )}
        </div>
      </div>

      {/* Grid: Phone & Service */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-text">
            Phone Number{" "}
            <span className="text-placeholder text-xs">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            disabled={isPending}
            className={`w-full bg-background border px-4 py-3 rounded-lg text-foreground placeholder:text-placeholder focus:outline-none transition-all ${
              state.errors?.phone
                ? "border-red focus:border-red"
                : "border-chip focus:border-primary"
            }`}
          />
          {state.errors?.phone && (
            <p className="text-xs text-red mt-0.5">{state.errors.phone[0]}</p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="service" className="text-sm font-medium text-text">
            Service Required
          </label>
          <select
            id="service"
            name="service"
            disabled={isPending}
            defaultValue=""
            className="w-full bg-background border border-chip focus:border-primary px-4 py-3 rounded-lg text-foreground focus:outline-none transition-all"
          >
            <option value="" disabled className="text-placeholder">
              Select a service...
            </option>
            <option value="Software Development">Software Development</option>
            <option value="Web & Mobile App">Web & Mobile Application</option>
            <option value="UI/UX & 3D Design">UI/UX & 3D Design</option>
            <option value="Digital Marketing">Digital Marketing & SEO</option>
            <option value="Video & Content Production">
              Video & Content Production
            </option>
            <option value="Other">Other Inquiry</option>
          </select>
        </div>
      </div>

      {/* Budget Range Selection */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-text">
            Budget Range <span className="text-placeholder text-xs">(INR)</span>
          </label>
          <span className="text-xs text-primary font-medium">
            {selectedBudget}
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {BUDGET_OPTIONS.map((option) => {
            const isSelected = selectedBudget === option;
            return (
              <label
                key={option}
                className={`flex items-center justify-center text-center px-3 py-2.5 rounded-lg border text-xs sm:text-sm font-medium cursor-pointer transition-all duration-200 select-none ${
                  isSelected
                    ? "bg-primary/15 border-primary text-primary shadow-sm shadow-primary/20"
                    : "bg-background border-chip text-text hover:border-text/40 hover:text-foreground"
                }`}
              >
                <input
                  type="radio"
                  name="budget"
                  value={option}
                  checked={isSelected}
                  onChange={() => setSelectedBudget(option)}
                  className="sr-only"
                  disabled={isPending}
                />
                {option}
              </label>
            );
          })}
        </div>
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="text-sm font-medium text-text">
          Subject <span className="text-placeholder text-xs">(optional)</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="Brief description of your project or inquiry"
          disabled={isPending}
          className="w-full bg-background border border-chip focus:border-primary px-4 py-3 rounded-lg text-foreground placeholder:text-placeholder focus:outline-none transition-all"
        />
      </div>

      {/* Project Description */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-text">
          Project Description <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us about your project, timeline, deliverables, and requirements..."
          disabled={isPending}
          className={`w-full bg-background border px-4 py-3 rounded-lg text-foreground placeholder:text-placeholder focus:outline-none transition-all resize-y ${
            state.errors?.message
              ? "border-red focus:border-red"
              : "border-chip focus:border-primary"
          }`}
        />
        {state.errors?.message && (
          <p className="text-xs text-red mt-0.5">{state.errors.message[0]}</p>
        )}
      </div>

      {/* File Attachment */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-text flex items-center justify-between">
          <span>
            Attachment{" "}
            <span className="text-placeholder text-xs">(optional)</span>
          </span>
          <span className="text-xs text-placeholder">
            PDF, DOC, Images, ZIP (Max 10MB)
          </span>
        </label>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          id="attachment"
          name="attachment"
          type="file"
          accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.webp,.zip"
          onChange={handleFileChange}
          disabled={isPending}
          className="sr-only"
        />

        {/* Dropzone / Attachment Box */}
        <div
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            setIsDragging(false);
          }}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragging(false);
            if (e.dataTransfer.files && e.dataTransfer.files[0]) {
              validateAndSetFile(e.dataTransfer.files[0]);
              // Also update input element files
              if (fileInputRef.current) {
                fileInputRef.current.files = e.dataTransfer.files;
              }
            }
          }}
          className={`border border-dashed rounded-xl p-4 transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 ${
            isDragging
              ? "border-primary bg-primary/10"
              : selectedFile
                ? "border-primary/50 bg-background"
                : "border-chip hover:border-primary/60 bg-background/60 hover:bg-background"
          }`}
        >
          {selectedFile ? (
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-medium text-foreground truncate">
                    {selectedFile.name}
                  </div>
                  <div className="text-xs text-text">
                    {formatFileSize(selectedFile.size)}
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={removeFile}
                className="p-1.5 rounded-md hover:bg-red/10 text-placeholder hover:text-red transition-colors flex-shrink-0 cursor-pointer"
                title="Remove attachment"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3 w-full">
              <div className="w-10 h-10 rounded-lg bg-chip text-placeholder flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm text-foreground">
                  <span className="text-primary font-medium">
                    Click to upload
                  </span>{" "}
                  or drag and drop
                </div>
                <div className="text-xs text-placeholder">
                  Share wireframes, brief document, or project specifications
                </div>
              </div>
            </div>
          )}
        </div>

        {fileError && <p className="text-xs text-red mt-0.5">{fileError}</p>}
        {state.errors?.attachment && (
          <p className="text-xs text-red mt-0.5">
            {state.errors.attachment[0]}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isPending}
          className="w-full sm:w-auto px-8 py-3.5 bg-primary text-background font-bold rounded-lg hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
        >
          {isPending ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-background"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span>Sending Message...</span>
            </>
          ) : (
            <span>Send Message</span>
          )}
        </button>
      </div>
    </form>
  );
}
