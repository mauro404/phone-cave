import { useParams } from "react-router-dom";

function PhoneDetails({phones}){
    const { id } = useParams();

    const detailedPhone = phones.find(phone => phone.id === id)

    return(
        <div>
            <img src={detailedPhone.imageFileName} alt={detailedPhone.name}/>
            <h2>{detailedPhone.name}</h2>
            <p>{detailedPhone.manufacturer}</p>
            <p>{detailedPhone.description}</p>
            <p>{detailedPhone.color}</p>
            <p>{detailedPhone.screen}</p>
            <p>{detailedPhone.processor}</p>
            <p>{detailedPhone.ram}</p>
            <p>{detailedPhone.price}</p>
        </div>
    )
}

export default PhoneDetails;