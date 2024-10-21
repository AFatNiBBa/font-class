
import { Icon, generic } from "../../index";

/**
 * A component that renders the `table-cells-column-unlock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-cells-column-unlock?s=sharp-duotone-solid table-cells-column-unlock}
 * @preview ![table-cells-column-unlock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/table-cells-column-unlock.svg)
 */
const TableCellsColumnUnlock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l384 0 0-64-24 0 0-64 24 0 0-64-24 0 0-64 66.8 0c15.8-33.2 47.5-57.5 85.2-62.9L512 32 0 32zM208 96l88 0 0 64-88 0 0-64zm0 128l88 0 0 64-88 0 0-64zm0 128l88 0 0 64-88 0 0-64zM360 96l88 0 0 64-88 0 0-64z" />
        <path d="M528 240c-17.7 0-32 14.3-32 32l0 48 32 0 32 0 48 0 32 0 0 192-224 0 0-192 32 0 0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l-48 0c0-17.7-14.3-32-32-32z" />
    </Icon>
);

export default TableCellsColumnUnlock;