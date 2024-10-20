
import { Icon } from "../../index";

/**
 * A component that renders the `table-columns` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-columns?s=regular table-columns}
 * @preview ![table-columns](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/table-columns.svg)
 */
const TableColumns: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 416l0-256 184 0 0 272L64 432c-8.8 0-16-7.2-16-16zm232 16l0-272 184 0 0 256c0 8.8-7.2 16-16 16l-168 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z" />
    </Icon>
);

export default TableColumns;