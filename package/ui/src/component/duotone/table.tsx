
import { Icon, generic } from "../../index";

/**
 * A component that renders the `table` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table?s=duotone table}
 * @preview ![table](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/table.svg)
 */
const Table: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 256l0 64 160 0 0 96 64 0 0-96 160 0 0-64-160 0 0-96-64 0 0 96L64 256z" />
        <path d="M64 160l0 256 384 0 0-256L64 160zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96z" />
    </Icon>
);

export default Table;