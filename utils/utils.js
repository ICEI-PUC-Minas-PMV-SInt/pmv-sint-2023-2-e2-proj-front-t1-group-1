import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Um scriptzinho pra não ter tanta dor de cabeça pra concatenar classes
 * predefinidas com `classNames` arbitrários.
 *
 * @param  {import("clsx/clsx")} inputs - as classes em si
 * @returns {string}
 */
export function cn(...inputs) {
   return twMerge(clsx(inputs));
}

/**
 * Um objeto simples com sub-objetos para definir mais facilmente as páginas
 * que não devem ter a navbar ou o footer.
 *
 * No `specific` são páginas específicas, talvez não "parentes" de nenhum grupo.
 * No `groups` são todas as rotas e subrotas que começam com aquela.
 */
export const hideNav = {
   specific: ["/login", "/criar-conta"],
};
