import { useField } from "formik";

function CheckboxElement({
    id,
    label,
    note,
    value: options,
    type = "checkbox",
    onChange,
}: CheckboxElementProps) {
    const handleChange = (selectedOption) => () => {
        const selectedOptionId = selectedOption.id;
        const newOptions = options.map((option) => {
            const checkbox =
                option.id === selectedOptionId ? !option.value : option.value;
            const radio = option.id === selectedOptionId ? true : false;
            const value = type === "checkbox" ? checkbox : radio;
            return { id: option.id, label: option.label, value };
        });
        onChange([...newOptions]);
    };
    return (
        <div className="row g-3 align-center">
            <div className="col-lg-5">
                <div className="form-group">
                    <label className="form-label">{label}</label>
                    {note && <span className="form-note">{note}</span>}
                </div>
            </div>
            <div className="col-lg-7">
                <ul className="custom-control-group g-3 align-center flex-wrap">
                    {options.map((option, index) => (
                        <li key={`checkbox-${index}`}>
                            <div
                                className={cx(
                                    "custom-control",
                                    { "custom-checkbox": type == "checkbox" },
                                    { "custom-radio": type == "radio" },
                                    { checked: !!option.value }
                                )}
                            >
                                <input
                                    type={type}
                                    className="custom-control-input"
                                    id={`${id}-${option.id}`}
                                    name={id}
                                    value={option.id}
                                    checked={option.value}
                                    onChange={handleChange(option)}
                                />
                                <label
                                    className="custom-control-label"
                                    htmlFor={`${id}-${option.id}`}
                                >
                                    {option.label}
                                </label>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export interface CheckboxValue {
    id: string;
    label: string;
    value: boolean;
}

export interface CheckboxElementProps {
    id: string;
    label: string;
    note?: string;
    value?: Array<CheckboxValue>;
    type?: "checkbox" | "radio";
    onChange?: (value: Array<CheckboxValue>) => void;
}

export interface CheckboxProps {
    id: string;
    label: string;
    note?: string;
    options?: Array<Omit<CheckboxValue, "value">>;
    value?: string;
    type?: "checkbox" | "radio";
}

const Checkbox = ({
    options: defaultOptions,
    ...checkboxProps
}: CheckboxProps) => {
    const [field, _meta, helpers] = useField(checkboxProps.id);

    const isCheckbox = checkboxProps.type === "checkbox";

    const options = defaultOptions.map((option) => {
        const radio = option.id === field.value;
        const checkbox = field.value?.includes(option.id);
        return { ...option, value: isCheckbox ? checkbox : radio };
    });

    const onChange = (updatedOptions) => {
        if (isCheckbox) {
            const selectedOptions = updatedOptions.filter(
                (option) => option.value === true
            );
            helpers.setValue(selectedOptions.map((option) => option.id));
            return;
        }

        const selectedOption = updatedOptions.find(
            (option) => option.value === true
        );
        helpers.setValue(selectedOption.id);
    };

    return (
        <CheckboxElement
            {...checkboxProps}
            value={options}
            onChange={onChange}
        />
    );
};

export default Checkbox;
