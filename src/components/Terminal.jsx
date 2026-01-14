import React, { useState } from 'react';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', content: '--- Aayush Portfolio OS v1.0 ---' },
    { type: 'system', content: 'Type "help" to begin.' }
  ]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    let response = '';

    if (cmd === 'help') response = 'Commands: about, projects, roast, clear';
    else if (cmd === 'about') response = '3rd Year IT Student | Security Engineer.';
    else if (cmd === 'roast') response = 'Nice portfolio... did you finish it or did your internet cut out?';
    else if (cmd === 'clear') { setHistory([]); setInput(''); return; }
    else response = `Command not found: ${cmd}`;

    setHistory([...history, { type: 'user', content: input }, { type: 'system', content: response }]);
    setInput('');
  };

  return (
    <div className="bg-black text-green-500 font-mono p-4 rounded-lg h-80 overflow-y-auto border border-green-900/50 shadow-2xl">
      {history.map((line, i) => (
        <div key={i} className={line.type === 'user' ? 'text-white' : 'text-green-400'}>
          {line.type === 'user' && '❯ '} {line.content}
        </div>
      ))}
      <form onSubmit={handleCommand} className="flex">
        <span className="mr-2">❯</span>
        <input 
          className="bg-transparent outline-none flex-1 text-white"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
        />
      </form>
    </div>
  );
};

export default Terminal;