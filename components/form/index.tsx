interface FormProps
    extends React.DetailedHTMLProps<
        React.FormHTMLAttributes<HTMLFormElement>,
        HTMLFormElement
    > {}

function Form(formProps: FormProps) {
    return (
        <form className={cx("gy-3", formProps.className)} {...formProps}>
            <div className="row g-3 align-center">
                <div className="col-lg-5">
                    <div className="form-group">
                        <label className="form-label" htmlFor="site-name">
                            Site Name
                        </label>
                        <span className="form-note">
                            Specify the name of your website.
                        </span>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="form-group">
                        <div className="form-control-wrap">
                            <input
                                type="text"
                                className="form-control"
                                id="site-name"
                                value="DashLite Admin Template"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-3 align-center">
                <div className="col-lg-5">
                    <div className="form-group">
                        <label className="form-label">Site Email</label>
                        <span className="form-note">
                            Specify the email address of your website.
                        </span>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="form-group">
                        <div className="form-control-wrap">
                            <input
                                type="text"
                                className="form-control"
                                id="site-email"
                                value="info@softnio.com"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-3 align-center">
                <div className="col-lg-5">
                    <div className="form-group">
                        <label className="form-label">Site Copyright</label>
                        <span className="form-note">
                            Copyright information of your website.
                        </span>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="form-group">
                        <div className="form-control-wrap">
                            <input
                                type="text"
                                className="form-control"
                                id="site-copyright"
                                value="© 2023, DashLite. All Rights Reserved."
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-3 align-center">
                <div className="col-lg-5">
                    <div className="form-group">
                        <label className="form-label">Allow Registration</label>
                        <span className="form-note">
                            Enable or disable registration from site.
                        </span>
                    </div>
                </div>
                <div className="col-lg-7">
                    <ul className="custom-control-group g-3 align-center flex-wrap">
                        <li>
                            <div className="custom-control custom-radio checked">
                                <input
                                    type="radio"
                                    className="custom-control-input"
                                    name="reg-public"
                                    id="reg-enable"
                                />
                                <label
                                    className="custom-control-label"
                                    htmlFor="reg-enable"
                                >
                                    Enable
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="custom-control custom-radio">
                                <input
                                    type="radio"
                                    className="custom-control-input"
                                    name="reg-public"
                                    id="reg-disable"
                                />
                                <label
                                    className="custom-control-label"
                                    htmlFor="reg-disable"
                                >
                                    Disable
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="custom-control custom-radio">
                                <input
                                    type="radio"
                                    className="custom-control-input"
                                    name="reg-public"
                                    id="reg-request"
                                />
                                <label
                                    className="custom-control-label"
                                    htmlFor="reg-request"
                                >
                                    On Request
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row g-3 align-center">
                <div className="col-lg-5">
                    <div className="form-group">
                        <label className="form-label">Main Website</label>
                        <span className="form-note">
                            Specify the URL if your main website is external.
                        </span>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="form-group">
                        <div className="form-control-wrap">
                            <input
                                type="text"
                                className="form-control"
                                name="site-url"
                                value="https://www.softnio.com"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-3 align-center">
                <div className="col-lg-5">
                    <div className="form-group">
                        <label className="form-label" htmlFor="site-off">
                            Maintenance Mode
                        </label>
                        <span className="form-note">
                            Enable to make website make offline.
                        </span>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="form-group">
                        <div className="custom-control custom-switch">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                name="reg-public"
                                id="site-off"
                            />
                            <label
                                className="custom-control-label"
                                htmlFor="site-off"
                            >
                                Offline
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-3">
                <div className="col-lg-7 offset-lg-5">
                    <div className="form-group mt-2">
                        <button
                            type="submit"
                            className="btn btn-lg btn-primary"
                        >
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Form;