
import { Icon, generic } from "../../index";

/**
 * A component that renders the `table-cells-large` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-cells-large?s=sharp-duotone-solid table-cells-large}
 * @preview ![table-cells-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/table-cells-large.svg)
 */
const TableCellsLarge: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 224l0 64 160 0 0 128 64 0 0-128 160 0 0-64-160 0 0-128-64 0 0 128L64 224z" />
        <path d="M448 96l0 320L64 416 64 96l384 0zM64 32L0 32 0 96 0 416l0 64 64 0 384 0 64 0 0-64 0-320 0-64-64 0L64 32z" />
    </Icon>
);

export default TableCellsLarge;