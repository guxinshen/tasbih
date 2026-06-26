import { useEffect, useState } from "react";

export default function Tasbih({ city }) {
  const [count, setCount] = useState(0);

  const key = `tasbih_${city}`;

  useEffect(() => {
    const saved = localStorage.getItem(key);
    if (saved) setCount(Number(saved));
  }, []);

  const add = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem(key, newCount);
  };

  const reset = () => {
    setCount(0);
    localStorage.setItem(key, 0);
  };

  return (
    <div style={{ textAlign: "center", padding: 30 }}>
      <h1>Tasbih di {city}</h1>

      <div style={{ fontSize: 60 }}>{count}</div>

      <button onClick={add} style={{ padding: 15 }}>
        Tap Dzikir
      </button>

      <br />

      <button onClick={reset} style={{ marginTop: 10 }}>
        Reset
      </button>
    </div>
  );
}

// SSR 获取 city 参数
export async function getServerSideProps(context) {
  return {
    props: {
      city: context.params.city
    }
  };
}
