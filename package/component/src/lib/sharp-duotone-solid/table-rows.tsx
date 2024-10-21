
import { Icon, generic } from "../../index";

/**
 * A component that renders the `table-rows` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-rows?s=sharp-duotone-solid table-rows}
 * @preview ![table-rows](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/table-rows.svg)
 */
const TableRows: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 224l0 64 320 0 0-64-320 0z" />
        <path d="M128 416l320 0 0-320L128 96l0 320zM0 480l0-64L0 96 0 32l64 0 384 0 64 0 0 64 0 320 0 64-64 0L64 480 0 480z" />
    </Icon>
);

export default TableRows;