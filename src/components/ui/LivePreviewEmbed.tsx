"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  RotateCw,
  Monitor,
  Tablet,
  Smartphone,
  ShieldCheck,
  Maximize2,
} from "lucide-react";

interface LivePreviewEmbedProps {
  url: string;
  title: string;
}

export default function LivePreviewEmbed({ url, title }: LivePreviewEmbedProps) {
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [iframeKey, setIframeKey] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const reloadIframe = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  const getContainerWidth = () => {
    switch (device) {
      case "mobile":
        return "max-w-[400px]";
      case "tablet":
        return "max-w-[768px]";
      default:
        return "w-full";
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>Interactive Live System Preview</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              Live Demo
            </span>
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Experience the live application below or launch it full-screen in a new tab.
          </p>
        </div>

        {/* View Controls & Launch Button */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Device Toggle */}
          <div className="hidden md:flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
            <button
              onClick={() => setDevice("desktop")}
              className={`p-1.5 rounded-lg text-xs font-medium transition-all ${
                device === "desktop"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-500 hover:text-slate-900"
              }`}
              title="Desktop View"
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDevice("tablet")}
              className={`p-1.5 rounded-lg text-xs font-medium transition-all ${
                device === "tablet"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-500 hover:text-slate-900"
              }`}
              title="Tablet View"
            >
              <Tablet className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDevice("mobile")}
              className={`p-1.5 rounded-lg text-xs font-medium transition-all ${
                device === "mobile"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-500 hover:text-slate-900"
              }`}
              title="Mobile View"
            >
              <Smartphone className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={reloadIframe}
            className="p-2 text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
            title="Reload Preview"
          >
            <RotateCw className="w-4 h-4" />
          </button>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-xs transition-colors"
          >
            <span>Open in New Tab</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Browser Mockup Window */}
      <div className={`mx-auto transition-all duration-300 ${getContainerWidth()}`}>
        <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
          {/* Top Browser Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-800/90 border-b border-slate-700/60">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-rose-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>

            {/* URL Address Bar */}
            <div className="flex items-center gap-2 px-3 py-1 bg-slate-900/80 rounded-lg border border-slate-700 text-xs text-slate-300 max-w-sm w-full mx-4">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate font-mono text-[11px]">{url}</span>
            </div>

            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              title="Open full screen in new tab"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Iframe Viewport */}
          <div className="relative bg-white" style={{ height: "650px" }}>
            {isLoading && (
              <div className="absolute inset-0 bg-slate-50 flex flex-col items-center justify-center gap-3 z-10">
                <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
                <span className="text-xs font-semibold text-slate-600">
                  Connecting to live demo environment...
                </span>
              </div>
            )}
            <iframe
              key={iframeKey}
              src={url}
              title={title}
              onLoad={() => setIsLoading(false)}
              className="w-full h-full border-0"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
