import React, {useState} from "react";
import Image from "next/image";
import fav from "../public/DSCF0026.JPG";
import Axios from "axios";

const App=async ()=>{
	var [number, setNum]=useState(0);
	function btnClick(){
		try{
			var data=await Axios.get("http://mnemosyne.co.kr/api/hello");
			console.log(data);
		}catch(e){
			console.dir(e);
		}
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
