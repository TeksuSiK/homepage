import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  shouldHover?: boolean;
}

const Button = (props: Props) => {
  const { shouldHover, ...rest } = props;

  return (
    <button
      {...rest}
      className={`${
        shouldHover ? "bg-gray-200 dark:bg-gray-800 text-gray-950 dark:text-gray-50" : "text-gray-600 dark:text-gray-400"
      } hover:text-gray-950 dark:hover:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md w-40 text-sm`}
    ></button>
  );
};

export default Button;
