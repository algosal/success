import { Link } from 'react-router-dom';

function NAV() {
    return (
        <div>
            <table style={{ width: "100%" }}>
                <tr>
                    <td><Link to="/"><button>Home</button></Link></td>
                    <td><Link to="/perfectlaw"><button>Perfect Law</button></Link></td>
                    <td><Link to="/main"><button>Main</button></Link></td>
                </tr>
            </table>
        </div>
    )
}

export default NAV; 