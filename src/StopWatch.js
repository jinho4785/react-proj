import React, {useState} from "react";

function StopWatch() {
  const [num, setNum] = useState(0);

  const timeoutId = setTimeout(()=>setNum(num + 1), 1000);
  
  const pause = () => {
    console.log("실행됨!");
    clearTimeout(timeoutId);
  }
  
  return (
    <div>
      숫자 : {num}

      <hr />
      <button onClick={pause}>일시정지</button>
    </div>
  );
}

export default StopWatch;
