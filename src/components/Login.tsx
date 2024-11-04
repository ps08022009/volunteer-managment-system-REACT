import React, { useState } from 'react';

const LoginScreen: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation Logic
    if (email === 'admin@example.com' && password === 'password123') {
      setError(''); // Clear error message
      onLogin(); // Call onLogin if the credentials are correct
    } else {
      setError('Invalid email or password. Please try again.'); // Set error message
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <div className="bg-card p-8 rounded-lg shadow-lg w-full max-w-xl">
        <h1 className="text-2xl font-semibold mb-6 text-center text-foreground">Login</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>} {/* Display error message */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-foreground">Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className="mt-1 block w-full p-2 border border-muted rounded focus:outline-none focus:ring focus:ring-primary focus:border-transparent"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-foreground">Password:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              className="mt-1 block w-full p-2 border border-muted rounded focus:outline-none focus:ring focus:ring-primary focus:border-transparent"
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-2 bg-primary text-white font-semibold rounded hover:bg-primary-700 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
