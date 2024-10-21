
import { Icon, generic } from "../../index";

/**
 * A component that renders the `table` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table?s=sharp-duotone-solid table}
 * @preview ![table](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/table.svg)
 */
const Table: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 256l0 64 160 0 0 96 64 0 0-96 160 0 0-64-160 0 0-96-64 0 0 96L64 256z" />
        <path d="M64 160l0 256 384 0 0-256L64 160zM0 32l64 0 384 0 64 0 0 64 0 320 0 64-64 0L64 480 0 480l0-64L0 96 0 32z" />
    </Icon>
);

export default Table;