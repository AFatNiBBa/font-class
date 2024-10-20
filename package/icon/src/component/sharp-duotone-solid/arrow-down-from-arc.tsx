
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-from-arc` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-from-arc?s=sharp-duotone-solid arrow-down-from-arc}
 * @preview ![arrow-down-from-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-down-from-arc.svg)
 */
const ArrowDownFromArc: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 258.7l0 32 64 0 0-32c0-106 86-192 192-192s192 86 192 192l0 32 64 0 0-32c0-141.4-114.6-256-256-256S0 117.4 0 258.7z" />
        <path d="M98.7 354.7l22.6 22.6 112 112L256 512l22.6-22.6 112-112 22.6-22.6L368 309.5l-22.6 22.6L288 389.5l0-194.7 0-32-64 0 0 32 0 194.7-57.4-57.4L144 309.5 98.7 354.7z" />
    </Icon>
);

export default ArrowDownFromArc;