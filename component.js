import React from 'react';
import {useState,useRef} from 'react';

/*class  Lot extends React.Component
{
display=()=>{if(this.state.a==="Arun")
{
this.setState({a:"Suhail"});
}
else
{this.setState({a:"Arun"});
}
};
constructor(
super();
this.state={a:"Arun"};
};

render(){
return(<><p>{this.state.a}</p>
<button type="submit" onClick ={this.display}>Click Me</button></>);
}
}
export {Lot};*/
 
function  Table(props){
const s1 =props.b1.map((data)=><tr><td>{data.name}</td><td>{data.gender}</td><td>{data.rank}</td></tr>);
return(<><table border="1"><tr><th>name</th><th>gender</th><th>rank</th></tr>{s1}</table></>);
}
export {Table};

function Mypara(){
const[x,y]=useState(16);
const incr =()=>{if(x<25){y(x+1);}}
const decr =()=>{if(x>16){y(x-1);}}
let myval={};
if(x===16|| x ===25) {myval={color:"red"}}
else{{myval={color:"green"}}

};
return(
<><p style ={myval}>{x}</p>
<button type="submit" onClick={incr} style= {{color:"green"}}>Increment</button><br/>
<button type="submit" onClick={decr} style = {{color:"red"}}>Decrement</button>
</>
);
}
export {Mypara};

function Mydata(){
const colors=["red","blue","green","pink","orange","black","yellow"];
const [a,setA]=useState(colors[0]);
const display=()=> {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * colors.length);
    } while (colors[randomIndex] === a); // avoid same color
    setA(colors[randomIndex]);
  };

return(<><p style ={{color:a}}> welcome to our sites</p>
<button type ="submit" onClick={display}>Touch Me</button>
</>);
}
export {Mydata};

function Names(){
const [names,setNames]=useState([]);
const display=()=>{if (names.length < 5 ){
const y =document.getElementById("num").value;
setNames([...names,y]);

}
}

return(<><br/><label for ="num" > Enter Your Names</label>
<input type="text" id = "num" /><br/>
<button type="submit" onClick={display}>Touch Me</button>
        <table border="2" style={{ marginTop: "10px" }}>
          <thead>
            <tr>
              <th>Names</th>
<th>Index</th>
            </tr>
          </thead>
          <tbody>
            {names.map((item, index) => (
              <tr key={index}>
                <td>{item}</td>
<td>{index + 10}</td>
              </tr>
            ))}
          </tbody>
        </table>
      
</>
); 
}
export {Names};

function Suhail(){
const[x,y]=useState([{names:'Arun',Rollno:10,Rank:1}]);
const names=useRef();
const nam=useRef();
const na=useRef();
const Dis=()=>{if(x.length<4){
const newEntry={
 names:names.current.value,
 Rollno:nam.current.value,
 Rank:na.current.value
};
y([...x,newEntry]);
}
}
return(<><br/>
<label for ="bb">Enter Ur Name:</label>
<input type ="text" id ="bb" ref={names}/><br/>
<label for ="cc">Enter Ur Rollno:</label>
<input type ="text" id ="cc" ref={nam}/><br/>
<label for ="rr">Enter Ur Rank:</label>
<input type ="text" id ="rr" ref={na}/><br/>

<button type ="submit" onClick ={Dis}>Done</button>
<table border="1" style={{ marginTop: "20px", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>
          {x.map((item, index) => (
            <tr key={index}>
              <td>{item.names}</td>
              <td>{item.Rollno}</td>
              <td>{item.Rank}</td>
            </tr>
          ))}
        </tbody>
      </table>
</>);
}
export {Suhail};
