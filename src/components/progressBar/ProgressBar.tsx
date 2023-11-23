"use client";
import { AppProgressBar } from "next-nprogress-bar";

export default function ProgressBar() {
  return (
    <AppProgressBar
      height="4px"
      color="#f58213"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
}
