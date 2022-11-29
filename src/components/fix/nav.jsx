import { Link } from 'react-router-dom';

function NAV() {
    return (
        <div>
            <table style={{ width: "100%" }}>
                <tr>
                    <td><Link to="/"><button className='button-width'>Home</button></Link></td>
                    <td><Link to="/perfectlaw"><button className='button-width'>Perfect Law</button></Link></td>
                    <td><Link to="/golden"><button className='button-width'>Golden Principles</button></Link></td>
                    <td><Link to="/fears"><button className='button-width'>Fears</button></Link></td>
                    <td><Link to="/desires"><button className='button-width'>Basic Desires</button></Link></td>
                </tr>
            </table>
        </div>
    )
}

export default NAV; 