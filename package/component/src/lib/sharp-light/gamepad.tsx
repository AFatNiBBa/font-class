
import { Icon } from "../../index";

/**
 * A component that renders the `gamepad` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gamepad?s=sharp-light gamepad}
 * @preview ![gamepad](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/gamepad.svg)
 */
const Gamepad: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 96l0 320 576 0 0-320L32 96zM0 64l32 0 576 0 32 0 0 32 0 320 0 32-32 0L32 448 0 448l0-32L0 96 0 64zM208 192l0 48 48 0 16 0 0 32-16 0-48 0 0 48 0 16-32 0 0-16 0-48-48 0-16 0 0-32 16 0 48 0 0-48 0-16 32 0 0 16zM408 304a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88-120a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Gamepad;