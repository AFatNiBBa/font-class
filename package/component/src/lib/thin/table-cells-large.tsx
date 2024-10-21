
import { Icon } from "../../index";

/**
 * A component that renders the `table-cells-large` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-cells-large?s=thin table-cells-large}
 * @preview ![table-cells-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/table-cells-large.svg)
 */
const TableCellsLarge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M264 48l0 200 232 0 0-152c0-26.5-21.5-48-48-48L264 48zm-16 0L64 48C37.5 48 16 69.5 16 96l0 152 232 0 0-200zM16 264l0 152c0 26.5 21.5 48 48 48l184 0 0-200L16 264zM264 464l184 0c26.5 0 48-21.5 48-48l0-152-232 0 0 200zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96z" />
    </Icon>
);

export default TableCellsLarge;