import React, {useState} from "react";

function StopWatch() {
  const [num, setNum] = useState(0);

  setTimeout(()=>setNum(num + 1), 1000);
  return (
    <div>
      숫자 : {num}
    </div>
  );
}

export default StopWatch;
