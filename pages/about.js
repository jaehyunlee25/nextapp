import React, {useState,useEffect} from "react";
import Image from "next/image";
import fav from "../public/DSCF0026.JPG";
import Axios from "axios";

export async function getStaticProps(){
	//var data=await Axios.get("http://mnemosyne.co.kr/api/hello");
	return {
		props:{
			name:"jaehyunlee"
		}
	}
};
const App=(props)=>{
	var [number, setNum]=useState(0);
	var [list, setList]=useState([]);
	function btnClick(){		
		setNum(number+1);
		setList([
			{name:"jaehyunlee"},
			{name:"okjinlee"},
			{name:"hankyullee"}
		]);
	};
	return (
		<div>
			about.js
			<div>
				<Image src={fav} width={100} height={100} alt="fav" />
			</div>
			{
				list.forEach(ob=>{
					return <div>ob.name</div>
				});
				<div>{number}</div>
				
			}
			<div>
				<button onClick={btnClick}>{props.name}</button>
			</div>
		</div>
	)
};
export default App;
