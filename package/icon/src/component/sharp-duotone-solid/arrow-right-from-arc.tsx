
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-right-from-arc` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-from-arc?s=sharp-duotone-solid arrow-right-from-arc}
 * @preview ![arrow-right-from-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-right-from-arc.svg)
 */
const ArrowRightFromArc: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512l32 0 0-64-32 0C150 448 64 362 64 256S150 64 256 64l32 0 0-64L256 0C114.6 0 0 114.6 0 256z" />
        <path d="M352 98.7l22.6 22.6 112 112L509.3 256l-22.6 22.6-112 112L352 413.3 306.7 368l22.6-22.6L386.7 288 192 288l-32 0 0-64 32 0 194.7 0-57.4-57.4L306.7 144 352 98.7z" />
    </Icon>
);

export default ArrowRightFromArc;