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
    <div style={{ maxWidth: 700, margin: "0 auto", padding: 20 }}>
      
      {/* SEO H1 */}
      <h1>Tasbih Online di {city}</h1>

      {/* 核心行为 */}
      <div style={{ textAlign: "center", marginTop: 40 }}>
        <div style={{ fontSize: 70, fontWeight: "bold" }}>{count}</div>

        <button
          onClick={add}
          style={{
            padding: "15px 30px",
            fontSize: 18,
            background: "#0ea5e9",
            color: "#fff",
            border: "none",
            borderRadius: 10
          }}
        >
          Tap Dzikir
        </button>

        <div>
          <button onClick={reset} style={{ marginTop: 15 }}>
            Reset
          </button>
        </div>
      </div>

      {/* SEO内容区（非常重要） */}
      <section style={{ marginTop: 50 }}>
        <h2>Apa itu Tasbih di {city}?</h2>
        <p>
          Tasbih digital gratis untuk Muslim di {city}. Gunakan untuk dzikir harian,
          tanpa aplikasi, langsung di browser.
        </p>

        <h2>Manfaat</h2>
        <ul>
          <li>Membantu konsistensi dzikir</li>
          <li>Gratis tanpa login</li>
          <li>Bisa digunakan kapan saja di {city}</li>
        </ul>
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      city: context.params.city
    }
  };
}
