
import { Icon } from "../../index";

/**
 * A component that renders the `gamepad` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gamepad?s=sharp-regular gamepad}
 * @preview ![gamepad](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/gamepad.svg)
 */
const Gamepad: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 112l0 288 544 0 0-288L48 112zM0 64l48 0 544 0 48 0 0 48 0 288 0 48-48 0L48 448 0 448l0-48L0 112 0 64zM232 200l0 32 32 0 24 0 0 48-24 0-32 0 0 32 0 24-48 0 0-24 0-32-32 0-24 0 0-48 24 0 32 0 0-32 0-24 48 0 0 24zm168 72a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm32-64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default Gamepad;