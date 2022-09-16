import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      name={props.id}
      className="rounded bg-zinc-900 py-3 px-4 text-sm placeholder:text-zinc-500"
    />
  );
};
