import React, {useState} from "react";
import Image from "next/image";
import fav from "../public/DSCF0026.JPG";
import Axios from axios;

const async App=()=>{
	console.log(await Axios.get("http://localhost/api/hello"));
	var [number, setNum]=useState(0);
	function btnClick(){
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
