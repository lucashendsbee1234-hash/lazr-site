export default function App() {
  return (
    <div style={{
      background:"#0b0b0b",
      color:"white",
      height:"100vh",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      fontFamily:"Arial"
    }}>
      <h1>LazR Hub</h1>

      <p>Website is live ✅</p>

      <a
        href="https://discord.gg/Eyhm3vHFgW"
        target="_blank"
        style={{
          padding:"12px 20px",
          background:"purple",
          borderRadius:"10px",
          color:"white",
          textDecoration:"none",
          marginTop:"20px"
        }}
      >
        Join Discord
      </a>
    </div>
  );
}