
import { Icon } from "../../index";

/**
 * A component that renders the `joystick` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/joystick?s=sharp-solid joystick}
 * @preview ![joystick](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/joystick.svg)
 */
const Joystick: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M336 112c0 50.7-33.7 93.6-80 107.4L256 320l-64 0 0-100.6c-46.3-13.8-80-56.6-80-107.4C112 50.1 162.1 0 224 0s112 50.1 112 112zM200 96a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM64 320l64 0 0 32 320 0 0 160L0 512 0 352l64 0 0-32z" />
    </Icon>
);

export default Joystick;