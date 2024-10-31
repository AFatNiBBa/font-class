
import { Icon } from "../../index";

/**
 * A component that renders the `table-cells` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-cells?s=thin table-cells}
 * @preview ![table-cells](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/table-cells.svg)
 */
const TableCells: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 48l0 128 144 0 0-80c0-26.5-21.5-48-48-48l-96 0zm-16 0L176 48l0 128 160 0 0-128zM160 48L64 48C37.5 48 16 69.5 16 96l0 80 144 0 0-128zM16 192l0 128 144 0 0-128L16 192zm0 144l0 80c0 26.5 21.5 48 48 48l96 0 0-128L16 336zM176 464l160 0 0-128-160 0 0 128zm176 0l96 0c26.5 0 48-21.5 48-48l0-80-144 0 0 128zM496 320l0-128-144 0 0 128 144 0zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM176 320l160 0 0-128-160 0 0 128z" />
    </Icon>
);

export default TableCells;