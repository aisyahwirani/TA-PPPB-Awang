import Head from 'next/head'

export default function Meta(props) {
    return (
        <Head>
            <title>{props.title}</title>
            <link rel="apple-touch-icon" sizes="57x57" href="/assets/icon.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/assets/icon.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/assets/icon.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/assets/icon.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/assets/icon.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/assets/icon.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/assets/icon.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/assets/icon.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/assets/icon.png" />
            <link rel="icon" type="image/png" sizes="192x192"  href="/assets/icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/assets/icon.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/assets/icon.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/assets/icon.png" />
            <link rel="icon" href="/icon.png" />
            <link rel="manifest" href="/manifest.json" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="/assets/icon.png" />
            <meta name="theme-color" content="#ffffff" />
            <meta name="description" content="Browse authentic culinaries." />
        </Head>
    )
}
