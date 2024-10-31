
import { Icon } from "../../index";

/**
 * A component that renders the `gamepad-modern` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gamepad-modern?s=sharp-light gamepad-modern}
 * @preview ![gamepad-modern](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/gamepad-modern.svg)
 */
const GamepadModern: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M440 480l-16-96-208 0-16 96L32.2 480 0 480l3.6-32L42.8 96 160 32l160 0 160 0L597.2 96l39.2 352 3.6 32-32.2 0L440 480zM184.4 378.7l4.5-26.7 27.1 0 208 0 27.1 0 4.5 26.7L467.1 448l137.1 0-37-331.9L471.8 64 320 64 168.2 64 72.8 116.1 35.8 448l137.1 0 11.5-69.3zM208 160l0 48 48 0 16 0 0 32-16 0-48 0 0 48 0 16-32 0 0-16 0-48-48 0-16 0 0-32 16 0 48 0 0-48 0-16 32 0 0 16zM408 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88-120a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default GamepadModern;