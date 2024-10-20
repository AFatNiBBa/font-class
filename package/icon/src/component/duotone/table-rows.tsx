
import { Icon, generic } from "../../index";

/**
 * A component that renders the `table-rows` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-rows?s=duotone table-rows}
 * @preview ![table-rows](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/table-rows.svg)
 */
const TableRows: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 224l0 64 320 0 0-64-320 0z" />
        <path d="M128 416l320 0 0-320L128 96l0 320zM64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480z" />
    </Icon>
);

export default TableRows;