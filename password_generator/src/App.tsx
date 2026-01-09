import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState<number>(6);
  const [number, setNumber] = useState<boolean>(false);
  const [special, setSpecial] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  //ref hook

  const passwordRef = useRef(null);

  const copyPass = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

    if (number) str += "0987654321";
    if (special) str += "!@#$%^&*()_+<>?:";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, special, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, special, passwordGenerator]);

  return (
    <>
      <div className="min-h-screen bg-black flex items-center flex-col">
        <div className="py-8">
          <h1 className="text-4xl text-center text-white mb-4">
            Password generator
          </h1>
        </div>
        <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-lg p-6">
          <div className="flex rounded-lg overflow-hidden">
            <input
              type="text"
              value={password}
              ref={passwordRef}
              className="w-full px-4 py-2 text-gray-800 bg-white outline-none rounded-xl"
              placeholder="Password..."
              readOnly
            />
            <button
              onClick={copyPass}
              className="bg-blue-700 px-3 py-0.5 shrink-0 text-white outline-none mx-2 rounded-x hover:bg-blue-600 cursor-pointer"
            >
              copy
            </button>
          </div>
          <div className="flex flex-col text-sm gap-y-3 mt-4">
            <div className="flex items-center gap-x-1 ">
              <input
                type="range"
                min={6}
                max={50}
                value={length}
                className="cursor-pointer"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setLength(Number(e.target.value));
                }}
              />
              <label className="text-white">Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={number}
                id="numberInput"
                onChange={() => {
                  setNumber((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput" className="text-white">
                Numbers
              </label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={special}
                id="specialInput"
                onChange={() => {
                  setSpecial((prev) => !prev);
                }}
              />
              <label htmlFor="specialInput" className="text-white">
                Special Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
