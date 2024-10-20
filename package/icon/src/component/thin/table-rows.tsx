
import { Icon } from "../../index";

/**
 * A component that renders the `table-rows` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-rows?s=thin table-rows}
 * @preview ![table-rows](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/table-rows.svg)
 */
const TableRows: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 96c0-26.5 21.5-48 48-48l64 0 0 416-64 0c-26.5 0-48-21.5-48-48L16 96zM448 464l-304 0 0-200 352 0 0 152c0 26.5-21.5 48-48 48zm48-216l-352 0 0-200 304 0c26.5 0 48 21.5 48 48l0 152zM0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416z" />
    </Icon>
);

export default TableRows;