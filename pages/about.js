import React from "react";
import Image from "next/image";
import fav from "../public/DSCF0026.JPG";

const app=()=>{	
	var [number, setNum]=React.useState(0);
	return <div>
		about.js
		<div>
			<Image src={fav} width={100} height={100} alt="fav" />
		</div>
		<div>{number}</div>
	</div>
};
export default app;
