import Layout from "../components/layout";

export default function Page() {
  return (
    <Layout>
      <article>
        <h1>Environment Variables</h1>
        <pre style={{ background: '#f4f4f4', padding: '1rem', borderRadius: '4px' }}>
          {JSON.stringify({
            NODE_ENV: process.env.NODE_ENV,
            ...Object.fromEntries(
              Object.entries(process.env)
                .filter(([key]) => key.startsWith('AWS'))
            )
          }, null, 2)}
        </pre>
      </article>
    </Layout>
  );
}
