
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-t` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-t?s=duotone circle-t}
 * @preview ![circle-t](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-t.svg)
 */
const CircleT: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128-88c0-13.3 10.7-24 24-24l104 0 104 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0 0 168c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-168-80 0c-13.3 0-24-10.7-24-24z" />
        <path d="M128 168c0-13.3 10.7-24 24-24l104 0 104 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0 0 168c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-168-80 0c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default CircleT;