
import { Icon } from "../../index";

/**
 * A component that renders the `table-rows` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-rows?s=sharp-solid table-rows}
 * @preview ![table-rows](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/table-rows.svg)
 */
const TableRows: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l512 0 0 448L0 480 0 32zM128 96l0 128 320 0 0-128L128 96zM448 288l-320 0 0 128 320 0 0-128z" />
    </Icon>
);

export default TableRows;