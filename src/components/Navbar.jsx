import NavUser from "./NavUser";
import NavWin from './NavWin';

export function Navbar() {
    return (
        <nav className="flex flex-row justify-between bg-green-900 w-full py-5">
            <NavUser position={1}/>
            <div className="flex flew-row">
                <NavWin user={1}/>
                <NavWin user= {0}/>
            </div>
            <NavUser/>
        </nav>
    )
}