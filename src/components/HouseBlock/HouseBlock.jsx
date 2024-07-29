import EntranceElement from "../EntranceElement/index"
import FlatElement from "../FlatElement/index"

export default function HouseBlock(props) {
    return (
        <div className="houseBlock-container">
            <h1 className="houseBlock-title">Дом {props.number}</h1>
            <div className="houseBlock-control">
                <button className="houseBlock-control_delete"></button>
                <button className="houseBlock-control_add"></button>
            </div>
            <div className="houseBlock-sheet">
                <h2 className="houseBlock-sheet-entrance_title"> Номер подъезда
                    {/* <EntranceElement name="Подъезд 1"/> */}
                </h2>
                <h2 className="houseBlock-sheet-flat_title"> Номер квартиры
                    {/* <FlatElement name="Квартира 2"/>
                    <FlatElement name="Квартира 5"/> */}
                </h2>
                <div className="houseBlock-sheet-blockElement">
                    <EntranceElement name="Подъезд 1" />
                    <FlatElement name="Квартира 2" />
                    <EntranceElement empty={true}/>
                    <FlatElement name="Квартира 5"/>
                    <EntranceElement empty={true}/>
                    <FlatElement name="Квартира 7" />
                </div>
            </div>
        </div>
    )
}