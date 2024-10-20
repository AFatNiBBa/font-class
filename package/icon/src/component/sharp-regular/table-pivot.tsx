
import { Icon } from "../../index";

/**
 * A component that renders the `table-pivot` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-pivot?s=sharp-regular table-pivot}
 * @preview ![table-pivot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/table-pivot.svg)
 */
const TablePivot: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l128 0 0 128L0 160 0 32zM160 160l0-128 352 0 0 448L0 480 0 192l128 0 0 240 336 0 0-272-304 0zm208 32l48 48 0 16-32 0 0 80 0 16-16 0-80 0 0 32-16 0-48-48 48-48 16 0 0 32 64 0 0-64-32 0 0-16 48-48z" />
    </Icon>
);

export default TablePivot;