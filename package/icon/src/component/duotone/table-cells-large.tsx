
import { Icon, generic } from "../../index";

/**
 * A component that renders the `table-cells-large` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-cells-large?s=duotone table-cells-large}
 * @preview ![table-cells-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/table-cells-large.svg)
 */
const TableCellsLarge: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 224l0 64 160 0 0 128 64 0 0-128 160 0 0-64-160 0 0-128-64 0 0 128L64 224z" />
        <path d="M448 96l0 320L64 416 64 96l384 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z" />
    </Icon>
);

export default TableCellsLarge;