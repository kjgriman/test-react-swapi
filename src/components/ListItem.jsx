import { useState } from "react";
import Modal from "./Modal";

export default function ListItem(props) {
    const { items,from } = props;
    const [showModal, setShowModal] = useState(false);
    const [id, setId] = useState(null);

    const showDetails = (item) => {
        const id =  Number(item.split('/').slice(-2)[0])
        setId(id)
        setShowModal(true)
    }
    const handlerClose = ()=>{
        setShowModal(false)
    }

    return (
        <>
            <Modal show={showModal} onClose={handlerClose} data={id} category={from}/>
            <ul className="divide-y divide-gray-200">
                {items?.results.map((item) => {
                    return (
                        <li onClick={()=>showDetails(item?.url)} key={item?.url} className="py-4 flex cursor-pointer hover:bg-gray-100 ">
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">{item?.name}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
           
        </>
    )
}