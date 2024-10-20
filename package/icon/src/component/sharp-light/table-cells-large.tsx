
import { Icon } from "../../index";

/**
 * A component that renders the `table-cells-large` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-cells-large?s=sharp-light table-cells-large}
 * @preview ![table-cells-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/table-cells-large.svg)
 */
const TableCellsLarge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 64l0 176 208 0 0-176L272 64zm-32 0L32 64l0 176 208 0 0-176zM32 272l0 176 208 0 0-176L32 272zM272 448l208 0 0-176-208 0 0 176zM0 32l32 0 448 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32z" />
    </Icon>
);

export default TableCellsLarge;