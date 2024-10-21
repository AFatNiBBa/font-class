
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-three-quarters-stroke` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-three-quarters-stroke?s=duotone circle-three-quarters-stroke}
 * @preview ![circle-three-quarters-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-three-quarters-stroke.svg)
 */
const CircleThreeQuartersStroke: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 0C397.4 0 512 114.6 512 256l-64 0c0-106-86-192-192-192l0-64z" />
        <path d="M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256H288c-17.7 0-32-14.3-32-32V0z" />
    </Icon>
);

export default CircleThreeQuartersStroke;