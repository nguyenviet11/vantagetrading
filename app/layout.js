import "./globals.css";

export const metadata = {
  title: "オンラインCFD取引 | CFD, FXブローカー | Vantage Trading",
  description: "Vantage Tradingは、FX、インデックス、株式、ETFなど、さまざまな金融商品のCFD取引を提供するオンラインブローカーです。常に競争力のあるスプレッドを提供しているので、コストを抑えてCFD取引をすることができます。ぜひ、Vantage TradingでオンラインCFD取引を始めてみてください。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
