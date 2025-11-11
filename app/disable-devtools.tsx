"use client";

import { useEffect } from "react";

export default function DisableReactDevTools() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__) {
      (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = () => {};
    }
  }, []);
  return null;
}
