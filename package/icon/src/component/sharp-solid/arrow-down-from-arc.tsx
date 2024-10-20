
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-from-arc` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-from-arc?s=sharp-solid arrow-down-from-arc}
 * @preview ![arrow-down-from-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-down-from-arc.svg)
 */
const ArrowDownFromArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 66.7c-106 0-192 86-192 192l0 32-64 0 0-32C0 117.4 114.6 2.7 256 2.7s256 114.6 256 256l0 32-64 0 0-32c0-106-86-192-192-192zM121.4 377.4L98.7 354.7 144 309.5l22.6 22.6L224 389.5l0-194.7 0-32 64 0 0 32 0 194.7 57.4-57.4L368 309.5l45.3 45.3-22.6 22.6-112 112L256 512l-22.6-22.6-112-112z" />
    </Icon>
);

export default ArrowDownFromArc;