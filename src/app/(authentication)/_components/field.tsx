import clsx from "clsx";
import { useId } from "react";

interface Props {
  type?: string;
  name: string;
  required?: boolean;
}

export default function Field({ type, name, required }: Props) {
  const id = useId();

  // TODO: Add Validation
  return (
    <div className="flex flex-row items-center justify-between text-text">
      <label htmlFor={id} className="capitalize">
        {name}:
      </label>
      <div>
        <input
          type={type || "text"}
          id={id}
          required={required}
          className={clsx(
            "peer rounded-sm px-4 py-2 text-black outline-primary",
            false && "invalid:ring-1 invalid:ring-rose-400",
          )}
          name={name}
        />
        <p className="peer:invalid:visible invisible text-xs">
          {
            // error msg
          }
        </p>
      </div>
    </div>
  );
}
