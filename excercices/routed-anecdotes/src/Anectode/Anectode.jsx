

const Anectode = ({ anectode }) => {
    return (
        <div>
            <h2>{anectode.content}</h2>
            <div>{anectode.author}</div>
            <div>{anectode.info}</div>
            <div>{anectode.votes}</div>
        </div>
    )
}

export default Anectode