
import { Icon } from "../../index";

/**
 * A component that renders the `table-cells-large` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-cells-large?s=sharp-regular table-cells-large}
 * @preview ![table-cells-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/table-cells-large.svg)
 */
const TableCellsLarge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280 80l0 152 184 0 0-152L280 80zm-48 0L48 80l0 152 184 0 0-152zM48 280l0 152 184 0 0-152L48 280zM280 432l184 0 0-152-184 0 0 152zM0 32l48 0 416 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32z" />
    </Icon>
);

export default TableCellsLarge;