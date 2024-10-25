

export default function Btnfiltre({ text, id, onChange, value }) {
        return (
                <label htmlFor={text} key={id}>
                        <input
                                type="checkbox"
                                onChange={onChange}
                                value={value}
                                id={text}
                        />
                        <span className="checkmark">{text}</span>
                </label>
        );
}