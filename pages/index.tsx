import Icon from "components/icon";
import Layout from "components/layout";

function Home() {
    return (
        <Layout title="Home">
            <div className="mb-5">Home Page</div>
            <a className="btn btn-lg btn-primary">
                <span>Save</span>
                <Icon type="save" />
            </a>
        </Layout>
    );
}

export default Home;
