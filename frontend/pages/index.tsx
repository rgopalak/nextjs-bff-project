// frontend/pages/index.tsx
import { useEffect, useState } from 'react';

export default function Home() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch('/.netlify/functions/bff/profile')
      .then(res => res.json())
      .then(data => setProfile(data));
  }, []);

  return (
    <div>
      {profile && (
        <div>
          <h1>{profile.name}</h1>
          <p>{profile.email}</p>
        </div>
      )}
    </div>
  );
}