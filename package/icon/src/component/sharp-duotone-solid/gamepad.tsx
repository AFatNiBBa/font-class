
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gamepad` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gamepad?s=sharp-duotone-solid gamepad}
 * @preview ![gamepad](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/gamepad.svg)
 */
const Gamepad: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 448l640 0 0-384L0 64zM112 232l56 0 0-56 48 0 0 56 56 0 0 48-56 0 0 56-48 0 0-56-56 0 0-48zm360 72a40 40 0 1 1 -80 0 40 40 0 1 1 80 0zm64-96a40 40 0 1 1 -80 0 40 40 0 1 1 80 0z" />
        <path d="M216 176l-48 0 0 56-56 0 0 48 56 0 0 56 48 0 0-56 56 0 0-48-56 0 0-56z" />
    </Icon>
);

export default Gamepad;