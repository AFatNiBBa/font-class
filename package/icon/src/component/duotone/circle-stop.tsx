
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-stop` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-stop?s=duotone circle-stop}
 * @preview ![circle-stop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-stop.svg)
 */
const CircleStop: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm160-64c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-128z" />
        <path d="M192 160h128a32 32 0 0 1 32 32v128a32 32 0 0 1 -32 32H192a32 32 0 0 1 -32-32V192a32 32 0 0 1 32-32z" />
    </Icon>
);

export default CircleStop;