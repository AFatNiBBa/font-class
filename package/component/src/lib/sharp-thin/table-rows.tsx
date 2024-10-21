
import { Icon } from "../../index";

/**
 * A component that renders the `table-rows` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-rows?s=sharp-thin table-rows}
 * @preview ![table-rows](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/table-rows.svg)
 */
const TableRows: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 48l112 0 0 416L16 464 16 48zM496 464l-352 0 0-200 352 0 0 200zm0-216l-352 0 0-200 352 0 0 200zM0 464l0 16 16 0 480 0 16 0 0-16 0-416 0-16-16 0L16 32 0 32 0 48 0 464z" />
    </Icon>
);

export default TableRows;