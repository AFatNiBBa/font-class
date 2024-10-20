
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-e` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-e?s=duotone circle-e}
 * @preview ![circle-e](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-e.svg)
 */
const CircleE: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM160 152c0-13.3 10.7-24 24-24l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-120 0 0 56 88 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-88 0 0 56 120 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24l0-104 0-104z" />
        <path d="M160 152c0-13.3 10.7-24 24-24l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-120 0 0 56 88 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-88 0 0 56 120 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24l0-104 0-104z" />
    </Icon>
);

export default CircleE;