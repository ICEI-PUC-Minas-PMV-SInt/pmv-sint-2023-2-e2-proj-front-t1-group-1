import Image from "next/image";

const TeamMember = ({ name, role, github, linkedin, imageSrc, imageAlt }) => (
   <div className="box">
     <div className="imgBox">
       <Image src={imageSrc} alt={imageAlt} width={500} height={500} />
     </div>
     <div className="content">
       <h2>
         {name} <br />
         <span>{role}</span>
       </h2>
       <ul>
         <li>
           <a href={github}>
             <Image src="/assets/github-white.svg" alt="github" width={30} height={30} />
           </a>
         </li>
         <li>
           <a href={linkedin}>
             <Image src="/assets/linkedin-white.svg" alt="linkedin" width={30} height={30} />
           </a>
         </li>
       </ul>
     </div>
   </div>
 );
 
 export default TeamMember;