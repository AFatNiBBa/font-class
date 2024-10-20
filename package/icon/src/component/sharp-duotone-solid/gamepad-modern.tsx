
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gamepad-modern` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gamepad-modern?s=sharp-duotone-solid gamepad-modern}
 * @preview ![gamepad-modern](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/gamepad-modern.svg)
 */
const GamepadModern: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 480L42.8 96 160 32l160 0 160 0L597.2 96 640 480l-200 0-16-96-208 0-16 96L0 480zM112 200l0 48 24 0 32 0 0 32 0 24 48 0 0-24 0-32 32 0 24 0 0-48-24 0-32 0 0-32 0-24-48 0 0 24 0 32-32 0-24 0zm280 72a40 40 0 1 0 80 0 40 40 0 1 0 -80 0zm64-96a40 40 0 1 0 80 0 40 40 0 1 0 -80 0z" />
        <path d="M216 144l0 24 0 32 32 0 24 0 0 48-24 0-32 0 0 32 0 24-48 0 0-24 0-32-32 0-24 0 0-48 24 0 32 0 0-32 0-24 48 0z" />
    </Icon>
);

export default GamepadModern;