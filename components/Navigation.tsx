import { useRouter } from "next/dist/client/router";
import { useTheme } from "next-themes";

import Button from "./Button";

const Navigation = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  return (
    <div className="sticky h-14 border-b border-gray-800 bg-gray-900 flex justify-center">
      <nav className="max-w-xl w-full flex content-center justify-between p-2 font-sans gap-1">
        <Button
          shouldHover={router.pathname === "/"}
          onMouseEnter={async () => router.prefetch("/")}
          onClick={async () => router.push("/")}
        >
          Home
        </Button>

        <Button
          shouldHover={router.pathname === "/uses"}
          onMouseEnter={async () => router.prefetch("/uses")}
          onClick={async () => router.push("/uses")}
        >
          Uses
        </Button>

        <Button
          onClick={async () => router.push("https://github.com/TeksuSiK")}
        >
          GitHub
        </Button>

        <Button
          onClick={async () => setTheme(theme === "light" ? "dark" : "light")}
        >
          Theme switcher
        </Button>
      </nav>
    </div>
  );
};

export default Navigation;
