import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [t, setT] = useState(0);
  useEffect(() => {
    (async () => {
      const t = await axios.get("/api");
      if (t) {
        setT(t.data);
      }
    })();
  }, []);

  return <div>api test. RESULT : {t}</div>;
}

export default App;
