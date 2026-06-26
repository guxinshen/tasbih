import { useEffect, useState } from "react";
import { cities } from "@/lib/cities";

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
    <div style={{ maxWidth: 700, margin: "0 auto", padding: 20 }}>
      
      <h1>Tasbih Online di {city}</h1>

      <div style={{ textAlign: "center", marginTop: 40 }}>
        <div style={{ fontSize: 70 }}>{count}</div>

        <button onClick={add} style={{ padding: 15 }}>
          Tap Dzikir
        </button>

        <button onClick={reset} style={{ marginLeft: 10 }}>
          Reset
        </button>
      </div>

    </div>
  );
}

/**
 * ⭐ 关键：生成500个城市页面
 */
export async function getStaticPaths() {
  const allCities = [
    ...cities.tier1,
    ...cities.tier2,
    ...cities.tier3
  ];

  return {
    paths: allCities.map((city) => ({
      params: { city }
    })),
    fallback: false
  };
}

/**
 * ⭐ 关键：把 city 传入页面
 */
export async function getStaticProps(context) {
  return {
    props: {
      city: context.params.city
    }
  };
}
