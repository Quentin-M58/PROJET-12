
export default function Btnfiltrecomp({ text, onChange, value, img }) {

        return (
                <>
                        <form id="filtre" key={value}>
                                <label htmlFor={text} key={value}>
                                        <input
                                                type="checkbox"
                                                onChange={onChange}
                                                value={value}
                                                id={text}
                                        />
                                        <div className="checkmark">
                                                <div className="desc">
                                                        <p>une description du filtre</p>
                                                </div>
                                                <div className="titre">
                                                        {img === "true" ?
                                                                <img src={`/Images/${value}.png`} alt={text} title={text} />
                                                                : null}
                                                        <p>{text}</p>
                                                </div>
                                        </div>
                                </label>
                        </form>
                </>
        );
}