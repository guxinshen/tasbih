import { useEffect, useState } from "react";
import { cities } from "../../lib/cities";
import { getCityContent } from "../../lib/cityContent";
import Layout from "../../components/Layout";

export default function Tasbih({ city }) {
  const content = getCityContent(city);
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

  // 🧠 智能内链系统（已升级版）
  function getRelatedCities(currentCity) {
    const tier1 = cities.tier1;
    const tier2 = cities.tier2;

    // 同级优先（排除自己）
    const sameTier = tier1.filter(c => c !== currentCity);

    // 打乱后取前6个
    const shuffledSame = sameTier.sort(() => Math.random() - 0.5).slice(0, 6);

    // 随机补充长尾
    const randomTier2 = [...tier2]
      .filter(c => c !== currentCity)
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);

    return [...shuffledSame, ...randomTier2];
  }

  const relatedCities = getRelatedCities(city);

return (
  <Layout city={city}>
    
    <div style={{ maxWidth: 700, margin: "0 auto" }}>
      
      <h1 style={{ textAlign: "center" }}>
        Tasbih Online di {city}
      </h1>

      {/* SEO内容 */}
      <section style={{ marginTop: 20, marginBottom: 30 }}>
        <p>{content.desc}</p>
        <p>{content.habit}</p>
        <p style={{ opacity: 0.7, fontStyle: "italic" }}>
          {content.tone}
        </p>
      </section>

      {/* Counter UI */}
      <div style={{ textAlign: "center", marginTop: 40 }}>
        <div style={{ fontSize: 80 }}>{count}</div>

        <button
          onClick={add}
          style={btnStyle}
        >
          Tap Dzikir
        </button>

        <button
          onClick={reset}
          style={{ ...btnStyle, marginLeft: 10, background: "#eee" }}
        >
          Reset
        </button>
      </div>

      {/* Related Cities */}
      <section style={{ marginTop: 50 }}>
        <h3>Related Cities</h3>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {relatedCities.map((c) => (
            <a
              key={c}
              href={`/${c}/tasbih`}
              style={{
                padding: "6px 10px",
                border: "1px solid #ddd",
                borderRadius: 6,
                textDecoration: "none",
                fontSize: 13
              }}
            >
              {c}
            </a>
          ))}
        </div>
      </section>

    </div>

  </Layout>
);
const btnStyle = {
  padding: "12px 18px",
  fontSize: 16,
  border: "1px solid #ccc",
  background: "#fff",
  borderRadius: 8,
  cursor: "pointer"
};
}

/**
 * ⭐ 生成500个城市页面
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
 * ⭐ 传入 city 参数
 */
export async function getStaticProps(context) {
  return {
    props: {
      city: context.params.city
    }
  };
}
