
import { Icon } from "../../index";

/**
 * A component that renders the `table-rows` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-rows?s=solid table-rows}
 * @preview ![table-rows](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/table-rows.svg)
 */
const TableRows: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm128 0l0 128 320 0 0-128L128 96zM448 288l-320 0 0 128 320 0 0-128z" />
    </Icon>
);

export default TableRows;