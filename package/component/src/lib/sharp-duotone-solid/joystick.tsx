
import { Icon, generic } from "../../index";

/**
 * A component that renders the `joystick` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/joystick?s=sharp-duotone-solid joystick}
 * @preview ![joystick](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/joystick.svg)
 */
const Joystick: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 320l64 0 0 32-64 0 0-32zM192 219.4c5.1 1.5 10.3 2.7 15.6 3.5c2.7 .4 5.4 .7 8.1 .9s5.5 .3 8.3 .3c11.1 0 21.9-1.6 32-4.6L256 352l-64 0 0-132.6z" />
        <path d="M336 112a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zM176 72a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM448 512l0-160L0 352 0 512l448 0z" />
    </Icon>
);

export default Joystick;