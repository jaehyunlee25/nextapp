import React, {useState,useEffect} from "react";
import Image from "next/image";
import fav from "../public/DSCF0026.JPG";
import Axios from "axios";
//import pg from "pg";
var {Client}=require("pg");
var client=new Client({
	user:"postgres",
	host:"13.124.176.157",
	database:"test",
	password:"123456",
	port:"5432"
});

function getData(){
	client.connect();
	var q1="select * from member;";
	return new Promise((resolve,rej)=>{
		client.query(
			q1,
			(err,res)=>{
				if(err){
					dir(err);
					return;
				}		
				resolve(res);
				client.end();
			}
		);		
	});
	
};
export async function getStaticProps(){
	//var data=await Axios.get("http://mnemosyne.co.kr/api/hello");
	var data=await getData();
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
	function btnClick(){		
		setNum(number+1);
		/* setList([
			{name:"jaehyunlee"},
			{name:"okjinlee"},
			{name:"hankyullee"}
		]); */
	};
	return (
		<div>
			about.js
			<div>
				<Image src={fav} width={100} height={100} alt="fav" />
			</div>
			{
				list.map(ob=>{
					return <div key={ob.id}>{ob.nickname}</div>
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
