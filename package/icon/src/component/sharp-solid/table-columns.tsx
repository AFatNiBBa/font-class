
import { Icon } from "../../index";

/**
 * A component that renders the `table-columns` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-columns?s=sharp-solid table-columns}
 * @preview ![table-columns](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/table-columns.svg)
 */
const TableColumns: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l512 0 0 448L0 480 0 32zM64 160l0 256 160 0 0-256L64 160zm384 0l-160 0 0 256 160 0 0-256z" />
    </Icon>
);

export default TableColumns;