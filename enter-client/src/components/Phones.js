function Phones({phones}){

    return(
        <div>
            {phones && phones.map(phone => {
                return(
                    <div key={phone.id}>
                        <img src={phones.imageFileName} alt={phones.name}/>
                        <h2>{phones.name}</h2>
                        <p>{phones.manufacturer}</p>
                        <p>{phones.description}</p>
                        <p>{phones.color}</p>
                        <p>{phones.screen}</p>
                        <p>{phones.processor}</p>
                        <p>{phones.ram}</p>
                        <p>{phones.price}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Phones;