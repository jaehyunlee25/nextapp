import React from "react";
import Image from "next/image";
import fav from "../public/DSCF0026.JPG";

var [number, setNum]=React.userState(0);
const app=()=><div>
	about.js
	<div>
		<Image src={fav} width={100} height={100} alt="fav" />
	</div>
	<div>{number}</div>
</div>
export default app;
