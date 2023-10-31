import {
    useNavigate,
    useParams,
  } from "react-router-dom";
import { Suspense, useRef } from "react";
// import PeopleDetailsPage from "../pages/people";
import Loading from "../components/Loading";
import StarWarsCardPeople from "../components/cards/People";
import { searchById } from "../services/people";
import { useEffect } from "react";
import { useState } from "react";

export default function PeopleDetails() {
    let navigate = useNavigate();
    let { id } = useParams();
    const [data,setData] = useState(null)
    useEffect(()=>{
        searchById(id).then(async (result) => {
            result.id = id
            setData(result)
        })
    },[])

  
  return (
    <div id="peopleDetails">
        <Suspense fallback={<Loading name="People" />}>
            <StarWarsCardPeople character={data}/>
        </Suspense>
    </div>
  );
}
