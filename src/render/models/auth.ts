import { useState, useEffect } from 'react'

export default function auth() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    setUser({
      id: 1,
      name: 'ludongmin'
    })
  }, [])

  return {
    user
  }
}
