import { useEffect, useState } from 'react';

export const  App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/message')
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>Фронт React</h1>
      <p>Ответ с бэка: {message}</p>
    </div>
  );
}
