import TD from "/component/td";
export default function TR({list}){
	return list.map(ar=><tr><TD list={ar} /></tr>)
}
