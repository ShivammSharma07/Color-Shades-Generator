import { useState } from "react";
import { Form } from "./Form";
import { ColorList } from "./ColorList";
import { ToastContainer, toast } from "react-toastify";
import Values from "values.js";

function App() {
  const [colors, setColors] = useState(new Values("#f193bc").all(10));
  const setColorsFn = (color) => {
    try {
      setColors(new Values(color).all(10));
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <main>
        <Form setColorsFn={setColorsFn} />
        <ColorList colors={colors} />
        <ToastContainer position="top-center" />
      </main>
    </>
  );
}

export default App;
