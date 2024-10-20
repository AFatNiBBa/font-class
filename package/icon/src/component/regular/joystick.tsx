
import { Icon } from "../../index";

/**
 * A component that renders the `joystick` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/joystick?s=regular joystick}
 * @preview ![joystick](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/joystick.svg)
 */
const Joystick: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 48a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm24 173.4c50.3-11 88-55.8 88-109.4C336 50.1 285.9 0 224 0S112 50.1 112 112c0 53.6 37.7 98.4 88 109.4l0 98.6 48 0 0-98.6zM96 320c-17.7 0-32 14.3-32 32c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-256 0c0-17.7-14.3-32-32-32zm0 80l288 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0z" />
    </Icon>
);

export default Joystick;