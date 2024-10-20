
import { Icon } from "../../index";

/**
 * A component that renders the `table-rows` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-rows?s=sharp-light table-rows}
 * @preview ![table-rows](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/table-rows.svg)
 */
const TableRows: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 64l96 0 0 176 0 32 0 176-96 0L32 64zM160 272l320 0 0 176-320 0 0-176zm320-32l-320 0 0-176 320 0 0 176zM0 448l0 32 32 0 448 0 32 0 0-32 0-384 0-32-32 0L32 32 0 32 0 64 0 448z" />
    </Icon>
);

export default TableRows;