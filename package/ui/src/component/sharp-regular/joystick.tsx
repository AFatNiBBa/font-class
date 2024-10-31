
import { Icon } from "../../index";

/**
 * A component that renders the `joystick` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/joystick?s=sharp-regular joystick}
 * @preview ![joystick](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/joystick.svg)
 */
const Joystick: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 48a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm24 173.4c50.3-11 88-55.8 88-109.4C336 50.1 285.9 0 224 0S112 50.1 112 112c0 53.6 37.7 98.4 88 109.4l0 98.6 48 0 0-98.6zM128 320l-64 0 0 32-16 0L0 352l0 48 0 64 0 48 48 0 352 0 48 0 0-48 0-64 0-48-48 0-272 0 0-32zM64 400l64 0 272 0 0 64L48 464l0-64 16 0z" />
    </Icon>
);

export default Joystick;