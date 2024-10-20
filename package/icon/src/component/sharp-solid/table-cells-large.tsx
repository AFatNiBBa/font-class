
import { Icon } from "../../index";

/**
 * A component that renders the `table-cells-large` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-cells-large?s=sharp-solid table-cells-large}
 * @preview ![table-cells-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/table-cells-large.svg)
 */
const TableCellsLarge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 96l0 128-160 0 0-128 160 0zm0 192l0 128-160 0 0-128 160 0zM224 224L64 224 64 96l160 0 0 128zM64 288l160 0 0 128L64 416l0-128zM64 32L0 32 0 96 0 416l0 64 64 0 384 0 64 0 0-64 0-320 0-64-64 0L64 32z" />
    </Icon>
);

export default TableCellsLarge;