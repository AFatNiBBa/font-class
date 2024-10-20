
import { Icon } from "../../index";

/**
 * A component that renders the `table-columns` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-columns?s=sharp-light table-columns}
 * @preview ![table-columns](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/table-columns.svg)
 */
const TableColumns: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 64l0 96L32 160l0-96 448 0zM32 448l0-256 208 0 0 256L32 448zm240 0l0-256 208 0 0 256-208 0zM32 32L0 32 0 64 0 448l0 32 32 0 448 0 32 0 0-32 0-384 0-32-32 0L32 32z" />
    </Icon>
);

export default TableColumns;