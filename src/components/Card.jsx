import PropTypes from "prop-types";
import ludo from "../images/icon-dice.svg";
import desktop from "../images/pattern-divider-desktop.svg";
import mobile from "../images/pattern-divider-mobile.svg";

export default function Card({ message, id , onClick }) {

    return (
    <div className="min-w-[90%] max-w-[600px] p-5 rounded-md flex flex-col items-center gap-4 bg-[hsl(217,19%,38%)]">
        <p className="-tracking-tighter text-emerald-600">Advice #{id}</p>
        <h1 className="text-white text-2xl">&quot;{message}&quot;</h1>

        <picture>
            <source media="(min-width: 768px)" srcSet={desktop} />
            <img src={mobile} alt="divider" />
        </picture>

        <button type="button" className="rounded-full bg-[hsl(150,100%,66%)] hover:shadow-[0px_0px_10px_2px_hsl(150,100%,66%)] transition-shadow p-4" onClick={()=>{onClick() ; console.log("hello");
        }}>
            <img src={ludo} alt="dice" />
        </button>
        </div>
    );
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired
};
