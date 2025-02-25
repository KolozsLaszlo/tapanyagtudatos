import React, { useState } from "react";
import "../App.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      alert("Sikeres bejelentkezés!");
    } else {
      setError("Hibás felhasználónév vagy jelszó!");
    }
  };

  return (
    <div className="p-6 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-4">Bejelentkezés</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleLogin} className="flex flex-col">
          <input
            type="text"
            placeholder="Felhasználónév"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 border border-gray-300 rounded-md mb-2  text-black"
            required
          />
          <input
            type="password"
            placeholder="Jelszó"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border border-gray-300 rounded-md mb-4 text-black"
            required
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-md w-full"
          >
            Belépés
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
