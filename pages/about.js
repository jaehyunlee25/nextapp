import React, {useState,useEffect} from "react";
import Image from "next/image";
import fav from "../public/DSCF0026.JPG";
import Axios from "axios";

const App=()=>{
	var [number, setNum]=useState(0);
	
	useEffect(_=>{
		try{
			console.log(getData());
		}catch(e){
			console.dir(e);
		}	
	})
	
	async function getData(){
		var data=await Axios.get("http://mnemosyne.co.kr/api/hello");
		return data;
	};
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
