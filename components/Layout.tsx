export default function Layout({ children }) {
  return (
    <>
      {children}
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body {
          height: 100%;
          width: 100%;
        }

        body {
          color: #f1f1f1;
          background-color: #212121;
          
          padding: 12px;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        h1 {
          text-align: center;
          margin-bottom: 24px;
        }

        h2 {
          text-align: center;
          color: green;
          margin: 12px 0;
        }

        nav {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        nav a {
          padding: 24px 12px;
          text-decoration: none;
          color: #f1f1f1;
          transition: 200ms;
        }

        nav a:hover {
          color: green;
          text-decoration: underline;
        }

        @media only screen and (max-width: 600px) {
          h1 { font-size: 20pt; }
          h2 { font-size: 14pt; }
          nav a { font-size: 9pt }
        }
      `}</style>
    </>
  )
}
