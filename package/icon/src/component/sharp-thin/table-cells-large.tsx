
import { Icon } from "../../index";

/**
 * A component that renders the `table-cells-large` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-cells-large?s=sharp-thin table-cells-large}
 * @preview ![table-cells-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/table-cells-large.svg)
 */
const TableCellsLarge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M264 48l0 200 232 0 0-200L264 48zm-16 0L16 48l0 200 232 0 0-200zM16 264l0 200 232 0 0-200L16 264zM264 464l232 0 0-200-232 0 0 200zM0 32l16 0 480 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32z" />
    </Icon>
);

export default TableCellsLarge;