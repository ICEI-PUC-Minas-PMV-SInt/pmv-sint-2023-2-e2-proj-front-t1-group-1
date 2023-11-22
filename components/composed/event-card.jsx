import Image from "next/image";
import { Button } from "../primitives/button";
import { cn } from "@/utils/utils";

export const EventCard = ({
   children,
   img,
   alt,
   title = "Título do evento",
   href = "#",
   tags,
   className,
}) => {
   return (
      <Button href={href} className={cn("event-item", className)}>
         {img && (
            <Image
               src={`/assets/${img}`}
               alt={alt}
               width={286}
               height={185}
               objectFit="contain"
               className="d-block"
            />
         )}
         <div className="content-card mt-3">
            <h3>{title}</h3>
            <p className="description-card">{children}</p>
            <div className="event-amount justify-content-center justify-content-md-between flex-column flex-md-row">
               <div className="valores"></div>
               <div>Incêndios</div>
            </div>
            <div
               className="progress"
               role="progressbar"
               aria-label="Arrecadados"
               aria-valuemax="100"
            >
               <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "0%" }}
                  aria-valuenow="0"
               ></div>
            </div>
            <Button customWidth className="btn btn-primary">Doar</Button>
         </div>
      </Button>
   );
};
