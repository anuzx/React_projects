import { Button } from "./components/Button"
import { Plusicon } from "./icons/Plusicon";
import { Shareicon } from "./icons/Shareicon";


function App() {
  return (
    <div>
      <Button
        startIcon={<Shareicon size={"lg"} />}
        variant="primary"
        size="sm"
        text="share"
      />
      <Button
        startIcon={<Plusicon size={"lg"} />}
        variant="secondary"
        size="md"
        text="Add content"
      />
    </div>
  );
}

export default App