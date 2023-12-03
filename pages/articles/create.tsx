import Editor from "components/editor";
import Layout from "components/layout";
import { useState } from "react";

const INITIAL_DATA = {
    time: new Date().getTime(),
    blocks: [
        {
            type: "Header",
            data: {
                text: "Start your journey here.",
                level: 3,
            },
        },
    ],
};

export default function ArticleCreatePage() {
    const [data, setData] = useState(INITIAL_DATA);

    return (
        <Layout title="Write an article">
            <div className="">
                <Editor id="article-content" value={data} onChange={setData} />
            </div>
        </Layout>
    );
}
