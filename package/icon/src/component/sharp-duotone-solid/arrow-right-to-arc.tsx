
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-right-to-arc` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-to-arc?s=sharp-duotone-solid arrow-right-to-arc}
 * @preview ![arrow-right-to-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-right-to-arc.svg)
 */
const ArrowRightToArc: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 0l0 64c106 0 192 86 192 192s-86 192-192 192l0 64c141.4 0 256-114.6 256-256S397.4 0 256 0z" />
        <path d="M208 98.7l22.6 22.6 112 112L365.3 256l-22.6 22.6-112 112L208 413.3 162.7 368l22.6-22.6L242.7 288 32 288 0 288l0-64 32 0 210.7 0-57.4-57.4L162.7 144 208 98.7z" />
    </Icon>
);

export default ArrowRightToArc;