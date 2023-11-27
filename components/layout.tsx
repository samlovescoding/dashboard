import Header from "components/header";
import Sidebar from "components/sidebar";
import { ThemeProvider } from "components/theme";

const Layout = ({ children, title }: LayoutProps) => {
    return (
        <ThemeProvider>
            <title>{title}</title>
            <div className="nk-app-root">
                <div className="nk-main">
                    <Sidebar />
                    <div className="nk-wrap">
                        <Header />
                        <div className="nk-content">
                            <div className="container-fluid">
                                <div className="nk-content-inner">
                                    <div className="nk-content-body">
                                        {children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
};

interface LayoutProps {
    children?: React.ReactNode;
    title: string;
}

export default Layout;
