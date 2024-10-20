
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-quarter-stroke` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-quarter-stroke?s=sharp-duotone-solid circle-quarter-stroke}
 * @preview ![circle-quarter-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-quarter-stroke.svg)
 */
const CircleQuarterStroke: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0l0 64c106 0 192 86 192 192s-86 192-192 192S64 362 64 256L0 256z" />
        <path d="M256 0C114.6 0 0 114.6 0 256l256 0L256 0z" />
    </Icon>
);

export default CircleQuarterStroke;