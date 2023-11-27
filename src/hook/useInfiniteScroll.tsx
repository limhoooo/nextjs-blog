"use client";

// import throttleOnRendering from "@/util/throttleOnRendering";
import { useState, useEffect } from "react";
import { throttle } from "lodash";

export default function useInfiniteScroll(fetchCallback: Function) {
  const [isFetching, setIsFetching] = useState(false);

  const handleScroll = throttle(() => {
    console.log("asd");

    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      setIsFetching(true);
    }
  }, 300);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isFetching) {
      return;
    }
    fetchCallback();
    setIsFetching(false);
  }, [isFetching]);

  return [isFetching, setIsFetching];
}
