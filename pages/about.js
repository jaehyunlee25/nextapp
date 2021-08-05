import React, {useState,useEffect} from "react";
import Image from "next/image";
import fav from "../public/DSCF0026.JPG";
import Axios from "axios";

export async function getData(){
	var data=await Axios.get("http://mnemosyne.co.kr/api/hello");
	console.log(data);
	return {
		props:{
			data
		}
	}
};
const App=()=>{
	var [number, setNum]=useState(0);
	async function btnClick(){
		setNum(number+1);
	};
	return (
		<div>
			about.js
			<div>
				<Image src={fav} width={100} height={100} alt="fav" />
			</div>
			<div>{number}</div>
			<div>
				<button onClick={btnClick}>Add</button>
			</div>
		</div>
	)
};
export default App;
