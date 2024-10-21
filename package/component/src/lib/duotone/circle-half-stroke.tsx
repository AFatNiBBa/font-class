
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-half-stroke` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-half-stroke?s=duotone circle-half-stroke}
 * @preview ![circle-half-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-half-stroke.svg)
 */
const CircleHalfStroke: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 0l0 64c106 0 192 86 192 192s-86 192-192 192l0 64c141.4 0 256-114.6 256-256S397.4 0 256 0z" />
        <path d="M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512L256 0z" />
    </Icon>
);

export default CircleHalfStroke;