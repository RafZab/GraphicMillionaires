
const Statistic = (props) => {
    return (
        <tr>
            <th scope="row">{props.number}</th>
            <td>{props.nick}</td>
            <td>{props.win} PLN</td>
            <td>{props.date}</td>
        </tr>
    );
}

export default Statistic;