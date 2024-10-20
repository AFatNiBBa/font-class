
import { Icon } from "../../index";

/**
 * A component that renders the `table` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table?s=sharp-light table}
 * @preview ![table](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/table.svg)
 */
const Table: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 64l0 96 448 0 0-96L32 64zm0 128l0 112 208 0 0-112L32 192zm240 0l0 112 208 0 0-112-208 0zM240 336L32 336l0 112 208 0 0-112zm32 112l208 0 0-112-208 0 0 112zM0 32l32 0 448 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32z" />
    </Icon>
);

export default Table;