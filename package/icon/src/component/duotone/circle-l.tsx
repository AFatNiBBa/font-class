
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-l` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-l?s=duotone circle-l}
 * @preview ![circle-l](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-l.svg)
 */
const CircleL: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM160 152c0-13.3 10.7-24 24-24s24 10.7 24 24l0 184 120 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24l0-208z" />
        <path d="M184 128c13.3 0 24 10.7 24 24l0 184 120 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24l0-208c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default CircleL;