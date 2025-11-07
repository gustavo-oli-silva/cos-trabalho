import Link from 'next/link'

export default function Page() {
  return (
    <main style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Audi RS6</h1>
        <p style={styles.lead}>Potência, luxo e desempenho em uma perua esportiva</p>
      </header>

      <section style={styles.hero}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/33/Audi_RS6_Avant_C8_IMG_1110.jpg"
          alt="Audi RS6 Avant"
          style={styles.image}
        />
      </section>

      <section style={styles.content}>
        <h2>Visão geral</h2>
        <p>
          O Audi RS6 é a versão de alta performance da família A6 da Audi. Conhecido
          por combinar espaço e utilidade de um station wagon com motores potentes
          e tecnologia avançada, o RS6 é popular entre quem busca praticidade sem
          abrir mão do desempenho.
        </p>

        <h3>Principais especificações (exemplo: C8 RS6 Avant)</h3>
        <ul>
          <li>Motor: V8 biturbo 4.0L</li>
          <li>Potência: ~600 cv (dependendo da versão)</li>
          <li>0-100 km/h: ~3.6 segundos</li>
          <li>Tração: Quattro (integral)</li>
          <li>Transmissão: Automática de 8 velocidades</li>
        </ul>

        <h3>Características</h3>
        <ul>
          <li>Interior luxuoso com tecnologia embarcada</li>
          <li>Sistemas avançados de assistência ao condutor</li>
          <li>Suspensão esportiva e modos de condução ajustáveis</li>
          <li>Design agressivo e aerodinâmico</li>
        </ul>

        <p style={{ marginTop: 20 }}>
          Para saber mais visite a página oficial da Audi ou consulte revistas
          especializadas em automóveis.
        </p>

        <div style={{ marginTop: 24 }}>
          <Link href="/">
            <a style={styles.button}>Voltar para a página inicial</a>
          </Link>
        </div>
      </section>
    </main>
  )
}

const styles: { [k: string]: React.CSSProperties } = {
  container: {
    fontFamily: 'Inter, system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial',
    color: '#111827',
    padding: '32px',
    maxWidth: 900,
    margin: '0 auto'
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: 24
  },
  title: {
    fontSize: 36,
    margin: 0
  },
  lead: {
    color: '#6b7280',
    marginTop: 8
  },
  hero: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 24
  },
  image: {
    width: '100%',
    maxWidth: 900,
    borderRadius: 8,
    boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
  },
  content: {
    lineHeight: 1.6
  },
  button: {
    display: 'inline-block',
    padding: '10px 16px',
    background: '#1f2937',
    color: '#fff',
    borderRadius: 6,
    textDecoration: 'none'
  }
}
