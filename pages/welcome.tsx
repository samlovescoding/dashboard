import Layout from "components/layout";

function Welcome({ name = "John" }) {
    return <Layout>Hello World and hello {name}</Layout>;
}

export default Welcome;
