
import { Icon } from "../../index";

/**
 * A component that renders the `table-cells` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-cells?s=sharp-thin table-cells}
 * @preview ![table-cells](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/table-cells.svg)
 */
const TableCells: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 48l0 128 144 0 0-128L352 48zm-16 0L176 48l0 128 160 0 0-128zM160 48L16 48l0 128 144 0 0-128zM16 192l0 128 144 0 0-128L16 192zm0 144l0 128 144 0 0-128L16 336zM176 464l160 0 0-128-160 0 0 128zm176 0l144 0 0-128-144 0 0 128zM496 320l0-128-144 0 0 128 144 0zM0 32l16 0 480 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM176 320l160 0 0-128-160 0 0 128z" />
    </Icon>
);

export default TableCells;