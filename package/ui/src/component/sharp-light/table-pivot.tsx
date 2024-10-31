
import { Icon } from "../../index";

/**
 * A component that renders the `table-pivot` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-pivot?s=sharp-light table-pivot}
 * @preview ![table-pivot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/table-pivot.svg)
 */
const TablePivot: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 64l0 96 320 0 0-96L160 64zm0 128l0 256 320 0 0-256-320 0zM128 64L32 64l0 96 96 0 0-96zM32 448l96 0 0-256-96 0 0 256zM0 32l32 0 448 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM400 224l48 48 0 16-32 0 0 80 0 16-16 0-80 0 0 32-16 0-48-48 48-48 16 0 0 32 64 0 0-64-32 0 0-16 48-48z" />
    </Icon>
);

export default TablePivot;