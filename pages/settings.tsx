import { useState } from "react";
import Form from "components/form";
import Layout from "components/layout";
import Input from "components/form/input";
import Switch from "components/form/switch";
import Checkbox from "components/form/checkbox";
import Buttons from "components/form/buttons";
import Submit from "components/form/submit";
import Reset from "components/form/reset";

function Settings() {
    const [copyright, setCopyright] = useState(
        "Copyright 2023. All Rights Reserved. Dashboard"
    );
    const [isMaintainanceMode, setIsMaintainanceMode] = useState(false);
    const [options, setOptions] = useState([
        { id: "enable", label: "Enable", value: true },
        { id: "disable", label: "Disable", value: false },
        { id: "on-request", label: "On Request", value: false },
    ]);

    return (
        <Layout title="Settings">
            <div className="nk-block nk-block-lg">
                <div className="nk-block-head">
                    <div className="nk-block-head-content">
                        <h4 className="title nk-block-title">
                            Setting Form Style
                        </h4>
                        <div className="nk-block-des">
                            <p>
                                You can make style out your setting related form
                                as per below example.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <div className="card-head">
                            <h5 className="card-title">Website Setting</h5>
                        </div>
                        <Form>
                            <Input
                                id="site-name"
                                label="Site Name"
                                note="Specify the name of the website"
                                placeholder="Site Name"
                            />
                            <Input
                                id="site-email"
                                type="email"
                                label="Site Email"
                                note="Specify the email of the website"
                                placeholder="jim@dundermiflin.com"
                            />
                            <Input
                                id="site-copyright"
                                label="Site Copyright"
                                note="Specify the copyright statement"
                                value={copyright}
                                onChange={setCopyright}
                            />
                            <Switch
                                id="maintenance-mode"
                                label="Maintenance Mode"
                                note="Maintainance mode disables"
                                value={isMaintainanceMode}
                                onChange={setIsMaintainanceMode}
                            />
                            <Input
                                id="base-url"
                                label="Main Website"
                                note="Specify the URL of the website"
                                value="http://dashboard.com"
                            />
                            <Checkbox
                                id="allow-registration"
                                label="Allow Registration"
                                note="Enable or disable registration from site."
                                type="radio"
                                value={options}
                                onChange={setOptions}
                            />
                            <Buttons>
                                <Submit>Update</Submit>
                                <Reset>Reset</Reset>
                            </Buttons>
                        </Form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Settings;
