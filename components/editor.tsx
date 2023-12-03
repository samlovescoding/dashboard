import Header from "@editorjs/header";
import List from "@editorjs/list";
import Link from "@editorjs/link";
import Delimiter from "@editorjs/delimiter";
import CheckList from "@editorjs/checklist";
import Attaches from "@editorjs/attaches";
import Code from "@editorjs/code";
import Embed from "@editorjs/embed";
import Image from "@editorjs/image";
import InlineCode from "@editorjs/inline-code";
import LinkAutocomplete from "@editorjs/link-autocomplete";
import Marker from "@editorjs/marker";
import NestedList from "@editorjs/nested-list";
import Quote from "@editorjs/quote";
import Raw from "@editorjs/raw";
import SimpleImage from "@editorjs/simple-image";
import Table from "@editorjs/table";
import TextVariantTune from "@editorjs/text-variant-tune";
import Underline from "@editorjs/underline";
import Warning from "@editorjs/warning";

import { useEffect, useRef } from "react";
import EditorJS, { ToolConstructable, ToolSettings } from "@editorjs/editorjs";

export const tools: EditorJSTools = {
    CheckList,
    List,
    Header,
    Delimiter,
    Link,
    Attaches,
    Code,
    Embed,
    Image,
    InlineCode,
    LinkAutocomplete,
    Marker,
    NestedList,
    Quote,
    Raw,
    SimpleImage,
    Table,
    TextVariantTune,
    Underline,
    Warning,
};

const Editor = ({ value, onChange, id }: EditorProps) => {
    const ref = useRef<EditorJS>();

    useEffect(() => {
        if (!ref.current) {
            const editor = new EditorJS({
                holder: id,
                tools: tools,
                data: value,
                async onChange(api, event) {
                    const data = await api.saver.save();
                    onChange(data);
                },
            });
            ref.current = editor;
        }
        return () => {
            if (ref.current && ref.current.destroy) {
                ref.current.destroy();
            }
        };
    }, []);

    return <div id={id} />;
};

interface EditorProps {
    value: any;
    onChange: Function;
    id: string;
}

interface EditorJSTools {
    [toolName: string]: ToolConstructable | ToolSettings;
}

export default Editor;
