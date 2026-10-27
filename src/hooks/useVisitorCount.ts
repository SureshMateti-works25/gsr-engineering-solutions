import { useState, useEffect } from 'react';

export function useVisitorCount() {
  const BASE_COUNT = 1485;
  const [visitorCount, setVisitorCount] = useState<number>(BASE_COUNT);
  const [onlineCount, setOnlineCount] = useState<number>(12);

  useEffect(() => {
    // 1. Check local session
    try {
      const storedCount = localStorage.getItem('gsr_visitor_count');
      const hasVisited = sessionStorage.getItem('gsr_session_visited');

      let current = storedCount ? parseInt(storedCount, 10) : BASE_COUNT;

      if (!hasVisited) {
        current += 1;
        sessionStorage.setItem('gsr_session_visited', 'true');
        localStorage.setItem('gsr_visitor_count', current.toString());
      }

      setVisitorCount(current);
    } catch {
      setVisitorCount(BASE_COUNT + 1);
    }

    // 2. Random slight realistic fluctuation for active online users (e.g., 9 - 18)
    const randomOnline = Math.floor(Math.random() * 8) + 11;
    setOnlineCount(randomOnline);

    const interval = setInterval(() => {
      setOnlineCount((prev) => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        const next = prev + delta;
        return next < 8 ? 8 : next > 22 ? 22 : next;
      });
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return { visitorCount, onlineCount };
}
