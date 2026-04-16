import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  role: "LEARNER" | "TUTOR";
  avatar: string;
  currentLevel: number;
  xp: number;
  streak: number;
  wordsLearned: number;
  charsLearned: number;
  lessonsCompleted: number[];
  joinedAt: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

const STORAGE_KEY = "kina_user";

function createDummyUser(name: string, email: string): User {
  return {
    id: crypto.randomUUID(),
    name,
    email,
    role: "LEARNER",
    avatar: name.charAt(0).toUpperCase(),
    currentLevel: 1,
    xp: 0,
    streak: 1,
    wordsLearned: 0,
    charsLearned: 0,
    lessonsCompleted: [],
    joinedAt: new Date().toISOString(),
  };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  function persist(u: User) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
    setUser(u);
  }

  async function login(_email: string, _password: string) {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setUser(JSON.parse(stored));
      return true;
    }
    const u = createDummyUser("Learner", _email);
    persist(u);
    return true;
  }

  async function register(name: string, email: string, _password: string) {
    const u = createDummyUser(name, email);
    persist(u);
    return true;
  }

  function logout() {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  }

  function updateUser(updates: Partial<User>) {
    if (!user) return;
    const updated = { ...user, ...updates };
    persist(updated);
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
