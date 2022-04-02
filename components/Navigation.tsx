import { useRouter } from "next/dist/client/router";

import Button from "./Button";

const Navigation = () => {
  const router = useRouter();

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
      </nav>
    </div>
  );
};

export default Navigation;
