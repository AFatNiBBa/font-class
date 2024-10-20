
import { Icon } from "../../index";

/**
 * A component that renders the `gamepad-modern` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gamepad-modern?s=sharp-solid gamepad-modern}
 * @preview ![gamepad-modern](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/gamepad-modern.svg)
 */
const GamepadModern: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 480l200 0 16-96 208 0 16 96 200 0L597.2 96 480 32 320 32 160 32 42.8 96 0 480zM432 232a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm24-56a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zm-240-8l0 32 32 0 24 0 0 48-24 0-32 0 0 32 0 24-48 0 0-24 0-32-32 0-24 0 0-48 24 0 32 0 0-32 0-24 48 0 0 24z" />
    </Icon>
);

export default GamepadModern;