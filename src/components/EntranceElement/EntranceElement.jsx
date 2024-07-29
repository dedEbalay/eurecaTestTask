export default function EntranceElement(props) {
    const { name, empty } = props
    if (empty) {
        return (
            <div className="houseBlock-sheet-entrance_elem"></div>
        )
    }
    return(
        <div className="houseBlock-sheet-entrance_elem">{name}</div>
    )
}