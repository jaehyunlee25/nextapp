import React, {useState,useEffect} from "react";
import fav from "../public/DSCF0026.JPG";
import Axios from "axios";
export async function getStaticProps(){
	var data=await Axios.get("http://mnemosyne.co.kr:1000/api/member");
	var result=data.rows.map(ob=>{
		return {id:ob.id,name:ob.nickname}
	});
	return {
		props:{
			result
		}
	}
};
const App=(props)=>{
	var [number, setNum]=useState(0);
	var [list, setList]=useState(props.result);
	console.dir(props.result);
	function btnClick(){		
		setNum(number+1);
	};
	return (
		<div>
			{
				list.map(ob=>{
					return <div key={ob.id}>{ob.name}</div>
				})				
			}
			<div>{number}</div>
			<div>
				<button onClick={btnClick}>add</button>
			</div>
		</div>
	)
};
export default App;
