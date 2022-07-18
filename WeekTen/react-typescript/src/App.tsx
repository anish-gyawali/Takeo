import React from "react";

type NameTagChildren={children:React.ReactNode};

//for multiple element React.ReactNode
//for one element JSX.Element

//function NameTag({children}:{children:React.ReactNode};

function NameTag({children}:NameTagChildren){
  return <>{children}</>
}
function App() {
  return (
    <div >
      <NameTag>
        <div>Hello</div>
        <div>I love react</div>
      </NameTag>
    </div>
  );
}

export default App;
