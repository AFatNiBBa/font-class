
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-half` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-half?s=duotone circle-half}
 * @preview ![circle-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-half.svg)
 */
const CircleHalf: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 0C397.4 0 512 114.6 512 256s-114.6 256-256 256L256 0z" />
        <path d="M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512L256 0z" />
    </Icon>
);

export default CircleHalf;