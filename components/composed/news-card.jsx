import { cn } from "@/utils/utils";
import { Button } from "../primitives/button";
import Image from "next/image";

export const NewsCard = ({
   children,
   title,
   date,
   href = "#",
   img,
   alt,
   className,
}) => {
   return (
      <Button href={href} className={cn("news-item", className)}>
         {img && (
            <Image
               src={`/assets/${img}`}
               alt={alt}
               width={300}
               height={175}
               objectFit="fill"
               className="rounded-2"
            />
         )}
         <h3>{title}</h3>
         <span>Publicado em {date}</span>
         <p>{children}</p>
      </Button>
   );
};
