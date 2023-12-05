import { createContext } from "react";
import { InputType } from "components/form/input";

export const FormContext = createContext<FormType>({
    fields: [],
    values: {},
    errors: {},
});

function Form({ fields, ...formProps }: FormProps) {
    const values = {};
    const errors = {};

    return (
        <FormContext.Provider value={{ fields, values, errors }}>
            <form className={cx("gy-3", formProps.className)} {...formProps}>
                {formProps.children}
            </form>
        </FormContext.Provider>
    );
}

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    fields: Array<FormField>;
}

interface FormField {
    type: InputType | "checkbox" | "radio" | "switch";
    id: string;
    placeholder: string;
    label: string;
    note: string;
}

interface FormErrors {
    [key: string]: string;
}

interface FormValues {
    [key: string]: string;
}

interface FormType {
    fields: Array<FormField>;
    values: FormValues;
    errors: FormErrors;
}

export default Form;
