import React, {useState,useEffect} from "react";
import fav from "../public/DSCF0026.JPG";
import Axios from "axios";

export async function getStaticProps(){
	var res=await Axios.get("http://mnemosyne.co.kr:1000/api/member"),
		fields=res.fields.map(ob=>ob.name),
		result=res.data.rows.map(ob=>{			
			return fields.map(field=>ob[field]);
		});		
	return {
		props:{result}
	}
};
const App=(props)=>{
	var [number,setNum]=useState(0),
		[list,setList]=useState(props.result);
	
	console.dir(list);
	
	function btnClick(){		
		setNum(number+1);
	};
	return (
		<div>
			<table>
			{
				/* list.map((ar,i)=>{
					return <tr key={i}><td>{ar[0]}</td></tr>
				}) */				
			}
			</table>
			<div>{number}</div>
			<div>
				<button onClick={btnClick}>add</button>
			</div>
		</div>
	)
};
export default App;
