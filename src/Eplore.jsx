import { Container } from "react-bootstrap";
import Header from "./common/Headers";
import { Footers } from "./common/Footer";
import { ExploreTab } from "./common/ExploreTab";

export function Explores(){
	return(
		<>
		<Header/>
		
		<ExploreTab/>
		
		<Footers/>
		
		
		</>
	)
}