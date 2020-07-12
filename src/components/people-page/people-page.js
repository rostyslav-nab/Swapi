// import React, {useState} from "react"
// import './people-page.scss'
// import PersonDetails from "../person-details/person-details";
// import ItemList from "../item-list/item-list";
//
// export const PeoplePage = () =>{
//     const[selectedPerson, setSelectedPerson] = useState(5)
//
//     const onPersonSelected = (id) =>{
//         setSelectedPerson(id)
//     }
//
//
//     return (
//         <div>
//             <div className={'col-md-6'}>
//                 <ItemList onItemSelected={onPersonSelected}/>
//             </div>
//             <div className={'col-md-3'}>
//                 <PersonDetails personId={selectedPerson}/>
//             </div>
//         </div>
//     )
// }