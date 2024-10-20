
import { Icon, generic } from "../../index";

/**
 * A component that renders the `table-cells-lock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-cells-lock?s=sharp-duotone-solid table-cells-lock}
 * @preview ![table-cells-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/table-cells-lock.svg)
 */
const TableCellsLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 32l512 0 0 129.1c-37.8 5.4-69.4 29.6-85.2 62.9L360 224l0 64 24 0 0 64-24 0 0 64 24 0 0 64L0 480 0 32zM64 96l0 64 88 0 0-64L64 96zm0 128l0 64 88 0 0-64-88 0zm0 128l0 64 88 0 0-64-88 0zM208 96l0 64 88 0 0-64-88 0zm0 128l0 64 88 0 0-64-88 0zm0 128l0 64 88 0 0-64-88 0zM360 96l0 64 88 0 0-64-88 0z" />
        <path d="M496 272l0 48 64 0 0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32zm-48 48l0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0z" />
    </Icon>
);

export default TableCellsLock;