
import { Icon } from "../../index";

/**
 * A component that renders the `table-rows` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-rows?s=sharp-regular table-rows}
 * @preview ![table-rows](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/table-rows.svg)
 */
const TableRows: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 432l-336 0 0-152 336 0 0 152zm0-200l-336 0 0-152 336 0 0 152zM0 432l0 48 48 0 416 0 48 0 0-48 0-352 0-48-48 0L48 32 0 32 0 80 0 432z" />
    </Icon>
);

export default TableRows;