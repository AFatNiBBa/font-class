
import { Icon } from "../../index";

/**
 * A component that renders the `gamepad` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gamepad?s=sharp-solid gamepad}
 * @preview ![gamepad](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/gamepad.svg)
 */
const Gamepad: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M640 64L0 64 0 448l640 0 0-384zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 176l48 0 0 56 56 0 0 48-56 0 0 56-48 0 0-56-56 0 0-48 56 0 0-56z" />
    </Icon>
);

export default Gamepad;