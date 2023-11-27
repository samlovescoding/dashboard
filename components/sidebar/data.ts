import { SidebarDropdownProps } from "components/sidebar/dropdown";
import { SidebarLinkProps } from "components/sidebar/link";

const sidebarData: Sidebar = [
    {
        id: "heading-finance",
        type: "heading",
        children: "Finance",
    },
    {
        id: "link-finance-overview",
        type: "link",
        href: "/",
        children: "Overview",
        icon: "coin",
    },
    {
        id: "link-finance-overview",
        type: "link",
        href: "/wishlist",
        children: "Wishlist",
        icon: "heart",
    },
    {
        id: "link-finance-accounts",
        type: "link",
        href: "/accounts",
        children: "Accounts",
        icon: "coins",
    },
    {
        id: "dropdown-finance-transactions",
        type: "dropdown",
        title: "Transactions",
        icon: "wallet-out",
        links: [
            {
                id: "dropdown-finance-transactions-income",
                type: "link",
                href: "/transactions/income",
                children: "Income",
            },
            {
                id: "dropdown-finance-transactions-expense",
                type: "link",
                href: "/transactions/expense",
                children: "Expense",
            },
            {
                id: "dropdown-finance-transactions-loan",
                type: "link",
                href: "/transactions/loan",
                children: "Loan",
            },
            {
                id: "dropdown-finance-transactions-deposit",
                type: "link",
                href: "/transactions/deposit",
                children: "Deposit",
            },
        ],
    },
    {
        id: "link-settings",
        type: "link",
        href: "/settings",
        children: "Settings",
        icon: "setting",
    },
];

type Sidebar = SidebarItem[];
type SidebarItem = SidebarDropdown | SidebarLink | SidebarHeading;
interface SidebarHeading {
    id: string;
    children: string;
    type: "heading";
}
interface SidebarLink extends SidebarLinkProps {
    type: "link";
    id: string;
}
interface SidebarDropdown extends SidebarDropdownProps {
    type: "dropdown";
    id: string;
    links: SidebarLink[];
}

export default sidebarData;
