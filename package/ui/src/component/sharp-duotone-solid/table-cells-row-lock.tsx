
import { Icon, generic } from "../../index";

/**
 * A component that renders the `table-cells-row-lock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-cells-row-lock?s=sharp-duotone-solid table-cells-row-lock}
 * @preview ![table-cells-row-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/table-cells-row-lock.svg)
 */
const TableCellsRowLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l384 0 0-64-24 0 0-64 24 0 0-64-24 0 0-64 66.8 0c15.8-33.2 47.5-57.5 85.2-62.9L512 32 0 32zM64 224l88 0 0 64-88 0 0-64zm0 128l88 0 0 64-88 0 0-64zM208 224l88 0 0 64-88 0 0-64zm0 128l88 0 0 64-88 0 0-64z" />
        <path d="M496 272l0 48 64 0 0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32zm-48 48l0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0z" />
    </Icon>
);

export default TableCellsRowLock;