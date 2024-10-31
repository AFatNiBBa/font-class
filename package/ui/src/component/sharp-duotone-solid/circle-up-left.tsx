
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-up-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-up-left?s=sharp-duotone-solid circle-up-left}
 * @preview ![circle-up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-up-left.svg)
 */
const CircleUpLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm160-96l160 0 24 24-52 52 76 76-56 56-76-76-52 52-24-24 0-160z" />
        <path d="M184 344l-24-24 0-160 160 0 24 24-52 52 76 76-56 56-76-76-52 52z" />
    </Icon>
);

export default CircleUpLeft;