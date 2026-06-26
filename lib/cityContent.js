export const cityContent = {

  // 🟢 Tier 1（SEO核心城市）
  jakarta: {
    desc: "Sebagai ibu kota Indonesia dengan populasi Muslim terbesar, Jakarta memiliki kebutuhan tinggi untuk alat ibadah digital seperti tasbih online.",
    habit: "Banyak pengguna di Jakarta menggunakan tasbih digital saat commuting di KRL, istirahat kerja, dan setelah sholat di masjid besar.",
    tone: "metropolitan, fast-paced Islamic lifestyle"
  },

  surabaya: {
    desc: "Surabaya merupakan kota perdagangan utama di Jawa Timur dengan komunitas Muslim yang sangat aktif.",
    habit: "Penggunaan tasbih digital umum dilakukan setelah sholat di masjid dan saat kegiatan keagamaan komunitas.",
    tone: "commercial + strong Islamic tradition"
  },

  bandung: {
    desc: "Bandung dikenal sebagai kota pendidikan dan kreatif dengan banyak anak muda Muslim yang aktif secara digital.",
    habit: "Tasbih online sering digunakan oleh mahasiswa dan pekerja kreatif untuk dzikir harian.",
    tone: "youthful, education-driven Islamic culture"
  },

  medan: {
    desc: "Medan memiliki komunitas Muslim besar dengan aktivitas ibadah harian yang kuat.",
    habit: "Tasbih digital digunakan secara rutin setelah sholat wajib di masjid dan rumah.",
    tone: "religiously active urban city"
  },

  yogyakarta: {
    desc: "Yogyakarta adalah kota budaya dan pendidikan dengan komunitas Muslim yang kuat di lingkungan akademik.",
    habit: "Penggunaan tasbih digital populer di kalangan mahasiswa dan santri.",
    tone: "cultural + Islamic education hub"
  },

  semarang: {
    desc: "Semarang merupakan kota pelabuhan penting dengan komunitas Muslim yang stabil.",
    habit: "Tasbih digunakan setelah sholat di masjid dan aktivitas harian.",
    tone: "balanced urban-religious city"
  },

  makassar: {
    desc: "Makassar adalah pusat ekonomi Indonesia Timur dengan komunitas Muslim yang kuat.",
    habit: "Penggunaan tasbih digital meningkat di kalangan pekerja dan komunitas Islam lokal.",
    tone: "eastern Indonesia Islamic hub"
  }
};
export function getCityContent(city) {
  const data = cityContent[city];

  if (data) return data;

  // 🧠 SEO增强版 fallback（比你现在强很多）
  return {
    desc: `Sebagai kota ${city} di Indonesia, komunitas Muslim lokal semakin aktif menggunakan alat digital seperti tasbih online untuk mendukung ibadah harian.`,
    
    habit: `Di ${city}, pengguna biasanya menggunakan tasbih digital setelah sholat lima waktu, saat waktu istirahat, dan dalam aktivitas harian.`,
    
    tone: `Islamic daily lifestyle in ${city}`
  };
}
