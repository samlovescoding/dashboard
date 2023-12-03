import Form from "components/form";
import Layout from "components/layout";

function Settings() {
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
                        <Form></Form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Settings;
