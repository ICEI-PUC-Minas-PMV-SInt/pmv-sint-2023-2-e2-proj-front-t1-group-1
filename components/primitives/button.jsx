import { cn } from "@/utils/utils";
import Link from "next/link";

/**
 * Um botão. Pode ser um botão (`<button>`) ou um link (`<a>`).
 *
 * @param {string} [href] - Se definido, o botão será um link.
 * @param {string} [className] - Classes CSS adicionais.
 */
export const Button = ({ children, className, ...props }) => {
   const COMPONENT = props.href ? Link : "button";

   return (
      <COMPONENT
         href={props.href}
         type={props.href ? undefined : "button"}
         className={cn("btn", className)}
         {...props}
      >
         {children}
      </COMPONENT>
   );
};
