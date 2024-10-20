
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-f` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-f?s=duotone circle-f}
 * @preview ![circle-f](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-f.svg)
 */
const CircleF: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM160 152c0-13.3 10.7-24 24-24l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-120 0 0 64 88 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-88 0 0 72c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-96 0-112z" />
        <path d="M160 152c0-13.3 10.7-24 24-24l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-120 0 0 64 88 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-88 0 0 72c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-96 0-112z" />
    </Icon>
);

export default CircleF;