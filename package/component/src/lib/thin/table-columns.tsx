
import { Icon } from "../../index";

/**
 * A component that renders the `table-columns` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-columns?s=thin table-columns}
 * @preview ![table-columns](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/table-columns.svg)
 */
const TableColumns: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 96c0-26.5 21.5-48 48-48l384 0c26.5 0 48 21.5 48 48l0 64L16 160l0-64zm0 320l0-240 232 0 0 288L64 464c-26.5 0-48-21.5-48-48zm248 48l0-288 232 0 0 240c0 26.5-21.5 48-48 48l-184 0zM0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416z" />
    </Icon>
);

export default TableColumns;