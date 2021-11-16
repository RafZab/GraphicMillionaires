
import './TableWin.css';

const TableWin = (props) => {
    const isActive = props.index === props.question ? 'active' : 'white'
    let isG = 'ng'
    if (props.index === 2 || props.index === 7 || props.index === 12)
        isG = 'g'
    return (
        <tr className={`color-${isActive} color-text-${isG}`}>
            <td>{props.index}</td>
            <td>{props.sumWon}</td>
        </tr>
    );
}

export default TableWin;