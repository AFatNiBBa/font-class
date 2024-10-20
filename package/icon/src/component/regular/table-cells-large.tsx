
import { Icon } from "../../index";

/**
 * A component that renders the `table-cells-large` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-cells-large?s=regular table-cells-large}
 * @preview ![table-cells-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/table-cells-large.svg)
 */
const TableCellsLarge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280 80l0 152 184 0 0-136c0-8.8-7.2-16-16-16L280 80zm-48 0L64 80c-8.8 0-16 7.2-16 16l0 136 184 0 0-152zM48 280l0 136c0 8.8 7.2 16 16 16l168 0 0-152L48 280zM280 432l168 0c8.8 0 16-7.2 16-16l0-136-184 0 0 152zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96z" />
    </Icon>
);

export default TableCellsLarge;