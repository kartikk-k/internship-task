import Head from 'next/head';

interface MetaHeadProps extends React.MetaHTMLAttributes<HTMLMetaElement> {
    title?: string;
    description?: string;
    embedSource?:
    | 'default'
    | {
        twitter?: string;
        linkedin?: string;
        og?: string;
    };
}

const MetaHead: React.FunctionComponent<MetaHeadProps> = ({
    title = 'Jet Protocol',
    description = 'Jet Protocol is a lending platform built on Solana that uses blazing fast speed and low transaction costs to maximize the efficiency of borrowing and lending markets in DeFi.',
    embedSource = 'default',
    ...attr
}) => {
    return (
        <Head {...attr}>
            <title>{title}</title>
            <link rel="shortcut icon" href="/favicon.ico" />
            <meta name="title" content="Jet Protocol" />
            <meta name="description" content={description} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.jetprotocol.io/" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta
                property="og:image"
                content={
                    embedSource === 'default'
                        ? '' // default card preview image
                        : embedSource?.og
                }
            />

            <meta
                property="twitter:card"
                content={
                    embedSource === 'default'
                        ? '' // card preview image
                        : embedSource?.twitter
                }
            />
            <meta property="twitter:url" content="https://www.jetprotocol.io/" />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta
                property="twitter:image"
                content={
                    embedSource === 'default'
                        ? '' // card preview image
                        : embedSource?.twitter
                }
            />
        </Head>
    );
};

export default MetaHead;
