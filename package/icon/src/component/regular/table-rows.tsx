
import { Icon } from "../../index";

/**
 * A component that renders the `table-rows` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-rows?s=regular table-rows}
 * @preview ![table-rows](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/table-rows.svg)
 */
const TableRows: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 432l-320 0 0-152 336 0 0 136c0 8.8-7.2 16-16 16zm16-200l-336 0 0-152 320 0c8.8 0 16 7.2 16 16l0 136zM0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416z" />
    </Icon>
);

export default TableRows;