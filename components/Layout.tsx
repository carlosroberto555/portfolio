export default function Layout({ children }) {
  return (
    <>
      {children}
      <style jsx global>{`
        body {
          font-family: "Jetbrains Mono", Roboto, sans-serif;
          color: #f1f1f1;
          background-color: #212121;
          
          box-sizing: border-box;
          padding: 12px;
          margin: 0;

          height: 100vh;
          width: 100vw;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        header {
          width: 100%;
        }

        h1 {
          text-align: center;
        }

        h2 {
          text-align: center;
          color: green;
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

        @keyframes blinking {
          0% { opacity: 0 }
          50% { opacity: 0 }
          60% { opacity: 1 }
          100% { opacity: 1 }
        }

        .blink {
          color: green;
          text-decoration: none;
        }

        .blinking {
          animation: blinking 1.5s infinite;
          animation-delay: .5s;
        }
      `}</style>
    </>
  )
}
