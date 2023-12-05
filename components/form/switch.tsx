function Switch({
    id,
    note,
    label,
    value = false,
    onChange = () => {},
    ...switchProps
}: SwitchProps) {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        onChange(event.target.checked);
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
                    <div className="custom-control custom-switch">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            name={id}
                            id={id}
                            checked={value}
                            onChange={handleChange}
                            {...switchProps}
                        />
                        <label className="custom-control-label" htmlFor={id}>
                            Offline
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface SwitchProps {
    id: string;
    label: string;
    note?: string;
    value?: boolean;
    onChange?: (isChecked: boolean) => void;
}

export default Switch;
