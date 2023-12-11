import { useField } from "formik";
import ReactSelect from "react-select";

interface Option {
    label: string;
    value: string;
}

interface SelectProps {
    id: string;
    multiple?: boolean;
    options: Array<Option>;
    label: string;
    note?: string;
}

const Select = ({
    id,
    label,
    note,
    multiple = false,
    ...selectProps
}: SelectProps) => {
    const [field, _meta, helpers] = useField(id);

    const value = multiple
        ? selectProps.options.filter((option) =>
              field.value.includes(option.value)
          )
        : selectProps.options.find((option) => option.value === field.value);
    const onChange = (updatedOption) => {
        if (multiple) {
            helpers.setValue(updatedOption.map((option) => option.value));
            return;
        }
        helpers.setValue(updatedOption.value);
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
                        <ReactSelect
                            {...selectProps}
                            isMulti={multiple}
                            value={value}
                            onChange={onChange}
                            styles={{
                                control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    borderColor: state.isFocused
                                        ? "#854fff"
                                        : "#dbdfea",
                                    boxShadow: state.isFocused
                                        ? "0 0 0 3px rgba(133, 79, 255, 0.1);"
                                        : "none",
                                    ":hover": {
                                        borderColor: state.isFocused
                                            ? "#854fff"
                                            : "#dbdfea",
                                        boxShadow: state.isFocused
                                            ? "0 0 0 3px rgba(133, 79, 255, 0.1);"
                                            : "none",
                                    },
                                }),
                                menu: (baseStyles) => ({
                                    ...baseStyles,
                                    zIndex: 100000,
                                }),
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Select;
