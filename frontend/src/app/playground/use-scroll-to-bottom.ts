import { useEffect, useRef, type RefObject } from "react";
import { Message } from "ai";
export function useScrollToBottom<T extends HTMLElement>(
  messages?: Message[],
): [RefObject<T | null>, RefObject<T | null>] {
  const containerRef = useRef<T>(null);
  const endRef = useRef<T>(null);

  useEffect(() => {
    const end = endRef.current;
    if (end) {
      end.scrollIntoView({ behavior: "instant", block: "end" });
    }
  }, [messages]);

  return [containerRef, endRef];
}
