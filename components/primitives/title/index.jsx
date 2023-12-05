
import * as S from "./style"


export const Title = ({ children, marginTop, sizeFont, weightFont}) => {
   
   return (
      <S.TitleCustom
     marginTop={marginTop}
     sizeFont={sizeFont}
     weightFont={weightFont}
      >
        {children}
      </S.TitleCustom>
   );
};
