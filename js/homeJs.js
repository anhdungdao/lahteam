const horibar= document.getElementById("modelImg");

const scrollLeftButton = document.getElementById("btPre");
const scrollRightButton = document.getElementById("btNext");


    scrollLeftButton.addEventListener("click", () => {
        horibar.scrollBy({
          top: 0,
          left: -200,
          behavior: "smooth",
        });
      });
      
      scrollRightButton.addEventListener("click", () => {
        horibar.scrollBy({
          top: 0,
          left: 200,
          behavior: "smooth",
        });
      });

      
// const hightlight = document.getElementById("texth5");
//       // console.log(hightlight);
       
// const messages = [
//         "Đội ngũ chuyên gia hàng đầu Việt Nam về AI tạo sinh"
//       ];
       
//       let messLength = messages.length;
       
//       // console.log(messLength);
//       let messIndex = 0;
//       let charIndex = 0;
       
//       function typing(messIndex) {
//         let currentMess = messages[messIndex];
//         if (charIndex < currentMess.length) {
//           let currentChar = currentMess.substring(0, charIndex + 1);
//           // console.log(currentChar);
//           hightlight.textContent = currentChar;
//           charIndex ++;
//         }else{
//           if(messIndex < messLength - 1){
//               messIndex ++;
//           }else{
//               messIndex = 0;
//           }
//           charIndex = 0;
//         }
//         console.log(currentMess);
      
//         setTimeout(typing, 50, messIndex);
//       }
       
//       typing(0);
