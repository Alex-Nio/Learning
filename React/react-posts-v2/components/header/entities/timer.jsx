import { useState } from 'react';

export function Timer() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Обновление времени каждую секунду
  setInterval(() => setCurrentTime(new Date()), 1000);

  return <span>{currentTime.toLocaleTimeString()}</span>;
}
