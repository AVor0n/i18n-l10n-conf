import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps,
} from 'next/document';

interface MyDocumentProps extends DocumentInitialProps {
    dir: string;
    lang: string;
}

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<MyDocumentProps> {
        const initialProps = await Document.getInitialProps(ctx);

        const lang = (ctx.req?.headers['X-lang'] as string) || 'en';

        const dir = lang.startsWith('ar') ? 'rtl' : 'ltr';

        return { ...initialProps, dir, lang };
    }

    render() {
        return (
            // @ts-expect-error description
            <Html lang={this.props.lang} dir={this.props.dir}>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
