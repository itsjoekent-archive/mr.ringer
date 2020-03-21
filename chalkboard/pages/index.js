import Head from 'next/head';

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>mr.ringer</title>
        <meta property="og:title" content="mr.ringer" />
        <meta
          property="og:description"
          content="mr.ringer is a Javascript math library that makes it simple to perform complex math."
        />
        <link rel="icon" href={`${process.env.ASSET_PREFIX}/favicon.ico`} />
      </Head>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
      <main>
        <h1>🚧 Work in progress! 🚧</h1>
      </main>
    </React.Fragment>
  );
}

export default Home;
