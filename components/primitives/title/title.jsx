
import * as S from "./style"


export const Title = ({ title, marginTop}) => {
   
   return (
      <S.Title
     marginTop={marginTop}
      >
         {title}
      </S.Title>
   );
};
