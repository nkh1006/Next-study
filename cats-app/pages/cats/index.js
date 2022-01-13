import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav/Nav';

export default function cats() {
  const [cats, setCats] = useState([]); 

  const fetchCats = async () => {
    const response = await fetch('/api/cats');
    const data = await response.json();
    console.log(data);
    setCats(data);
  }

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <div>
      <Nav />
      {cats.map(cat => (
        <Card 
          key={cat.id}
          name={cat.name}
          id={cat.id}
          phone={cat.phone}
          email={cat.email}
          imgage={cat.image}
        />
      ))}
    </div>
  );
}