function Pessoa(image, name, age, profession) {
    return (
        <div>
            <img src={image} alt={name} />
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Profession: {profession}</p>
        </div>
    )
}

export default Pessoa;