function Input({
    id,
    type = "text",
    label,
    note,
    onChange = () => {},
    ...inputProps
}: InputProps) {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        onChange(event.target.value);
    };
    return (
        <div className="row g-3 align-center">
            <div className="col-lg-5">
                <div className="form-group">
                    <label className="form-label" htmlFor={id}>
                        {label}
                    </label>
                    {note && <span className="form-note">{note}</span>}
                </div>
            </div>
            <div className="col-lg-7">
                <div className="form-group">
                    <div className="form-control-wrap">
                        <input
                            {...inputProps}
                            className={cx("form-control", inputProps.className)}
                            type={type}
                            id={id}
                            name={id}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export type InputType =
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "hidden"
    | "month"
    | "number"
    | "password"
    | "range"
    | "search"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";

interface InputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
    id: string;
    label: string;
    note?: string;
    type?: InputType;
    onChange?: (newValue: string) => void;
}

export default Input;
