import { useState, useCallback, useEffect } from "react";

interface User {
  id: number;
  name: string;
}

export default function auth() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser({
      id: 1,
      name: "ludongmin",
    });
  }, []);

  return {
    user,
  };
}
