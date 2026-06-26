export const dynamic = "force-static";
export const revalidate = 3600;
import TasbihClient from "./TasbihClient";

export async function generateMetadata({ params }: any) {
  return {
    title: `Tasbih Online di ${params.city}`,
    description: `Tasbih digital gratis untuk Muslim di ${params.city}`
  };
}

export default function Page({ params }: any) {
  return (
    <main style={{ maxWidth: 700, margin: "0 auto", padding: 20 }}>
      <h1>Tasbih Online di {params.city}</h1>
      <TasbihClient city={params.city} />
    </main>
  );
}
