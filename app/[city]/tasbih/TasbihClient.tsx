"use client";

import { useEffect, useState } from "react";

export default function TasbihClient({ city }: { city: string }) {
  const [count, setCount] = useState(0);

  const key = `tasbih_${city}`;

  useEffect(() => {
    const saved = localStorage.getItem(key);
    if (saved) setCount(Number(saved));
  }, [city]);

  const add = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem(key, String(newCount));
  };

  const reset = () => {
    setCount(0);
    localStorage.setItem(key, "0");
  };

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <div style={{ fontSize: 64, fontWeight: "bold" }}>{count}</div>

      <button
        onClick={add}
        style={{
          padding: "15px 30px",
          fontSize: 18,
          background: "#0ea5e9",
          color: "#fff",
          border: "none",
          borderRadius: 10,
          marginTop: 20
        }}
      >
        Tap Dzikir
      </button>

      <div>
        <button onClick={reset} style={{ marginTop: 20 }}>
          Reset
        </button>
      </div>
    </div>
  );
}
