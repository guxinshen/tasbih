import Head from "next/head";
import Link from "next/link";

export default function Layout({ children, city }) {
  return (
    <>
      <Head>
        <title>{city ? `Tasbih Online di ${city}` : "Tasbih Online Indonesia"}</title>
        <meta
          name="description"
          content="Tasbih online digital untuk dzikir harian umat Muslim di Indonesia."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* NAV */}
      <header style={styles.header}>
        <div style={styles.logo}>🕌 Tasbih Online</div>

        <nav style={styles.nav}>
          <Link href="/" style={styles.link}>Home</Link>
          <Link href="/jakarta/tasbih" style={styles.link}>Jakarta</Link>
          <Link href="/surabaya/tasbih" style={styles.link}>Surabaya</Link>
          <Link href="/bandung/tasbih" style={styles.link}>Bandung</Link>
        </nav>
      </header>

      {/* PAGE */}
      <main style={styles.main}>{children}</main>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © {new Date().getFullYear()} Tasbih Online Indonesia • Built for Muslim community
      </footer>
    </>
  );
}

const styles = {
  header: {
    padding: "15px 20px",
    borderBottom: "1px solid #eee",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 18,
  },
  nav: {
    display: "flex",
    gap: 15,
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontSize: 14,
  },
  main: {
    minHeight: "80vh",
    padding: 20,
  },
  footer: {
    textAlign: "center",
    padding: 20,
    borderTop: "1px solid #eee",
    marginTop: 40,
    fontSize: 13,
    color: "#777",
  },
};
