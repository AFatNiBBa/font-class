
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-left-from-arc` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-from-arc?s=sharp-duotone-solid arrow-left-from-arc}
 * @preview ![arrow-left-from-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-left-from-arc.svg)
 */
const ArrowLeftFromArc: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M221.3 0l0 64 32 0c106 0 192 86 192 192s-86 192-192 192l-32 0 0 64 32 0c141.4 0 256-114.6 256-256s-114.6-256-256-256l-32 0z" />
        <path d="M157.3 98.7l-22.6 22.6-112 112L0 256l22.6 22.6 112 112 22.6 22.6L202.5 368l-22.6-22.6L122.5 288l194.7 0 32 0 0-64-32 0-194.7 0 57.4-57.4L202.5 144 157.3 98.7z" />
    </Icon>
);

export default ArrowLeftFromArc;