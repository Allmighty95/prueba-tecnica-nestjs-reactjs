import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000")
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h1>Frontend en React</h1>
      <p>Respuesta del backend: {message}</p>
    </div>
  );
}

export default App;
