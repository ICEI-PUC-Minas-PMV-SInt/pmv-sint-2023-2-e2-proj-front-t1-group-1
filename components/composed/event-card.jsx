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
   goal,
   donated
}) => {

   let progress = (donated / goal) * 100;

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
            <div className="event-amount justify-content-center justify-content-md-between flex-column flex-md-row mt-2">
            <div className="valores">
               <p>{` R$ ${donated.toFixed(0)} / R$ ${goal.toFixed(0)}`}</p>
            </div>
               <div>Incêndios</div>
            </div>
            <div className="progress" role="progressbar" aria-label="Arrecadados" aria-valuemax="100">
            <div className="progress-bar" role="progressbar" style={{ width: `${progress}%`, backgroundColor: '#73A580' }} aria-valuenow={progress}></div>
          </div>
            <Button customWidth className="btn btn-primary">Doar</Button>
         </div>
      </Button>
   );
};
