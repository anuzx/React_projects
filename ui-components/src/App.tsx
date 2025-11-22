import { Button } from "./components/Button"
import { Plusicon } from "./icons/Plusicon";
import { Shareicon } from "./icons/Shareicon";


function App() {
  return (
    <div>
      <Button
        startIcon={<Shareicon />}
        variant="primary"
        size="sm"
        text="share"
      />
      <Button
        startIcon={<Plusicon />}
        variant="secondary"
        size="md"
        text="Add content"
      />
    </div>
  );
}

export default App