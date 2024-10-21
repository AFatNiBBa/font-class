
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-from-arc` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-from-arc?s=sharp-solid arrow-up-from-arc}
 * @preview ![arrow-up-from-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-up-from-arc.svg)
 */
const ArrowUpFromArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 448C150 448 64 362 64 256l0-32L0 224l0 32C0 397.4 114.6 512 256 512s256-114.6 256-256l0-32-64 0 0 32c0 106-86 192-192 192zM121.4 137.4L98.7 160 144 205.3l22.6-22.6L224 125.3 224 320l0 32 64 0 0-32 0-194.7 57.4 57.4L368 205.3 413.3 160l-22.6-22.6-112-112L256 2.7 233.4 25.4l-112 112z" />
    </Icon>
);

export default ArrowUpFromArc;