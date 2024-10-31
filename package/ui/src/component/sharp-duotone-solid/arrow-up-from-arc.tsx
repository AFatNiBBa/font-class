
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-from-arc` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-from-arc?s=sharp-duotone-solid arrow-up-from-arc}
 * @preview ![arrow-up-from-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-up-from-arc.svg)
 */
const ArrowUpFromArc: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224l0 32C0 397.4 114.6 512 256 512s256-114.6 256-256l0-32-64 0 0 32c0 106-86 192-192 192S64 362 64 256l0-32L0 224z" />
        <path d="M98.7 160l22.6-22.6 112-112L256 2.7l22.6 22.6 112 112L413.3 160 368 205.3l-22.6-22.6L288 125.3 288 320l0 32-64 0 0-32 0-194.7-57.4 57.4L144 205.3 98.7 160z" />
    </Icon>
);

export default ArrowUpFromArc;