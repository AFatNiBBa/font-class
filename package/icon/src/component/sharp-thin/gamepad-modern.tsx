
import { Icon } from "../../index";

/**
 * A component that renders the `gamepad-modern` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gamepad-modern?s=sharp-thin gamepad-modern}
 * @preview ![gamepad-modern](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/gamepad-modern.svg)
 */
const GamepadModern: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M440 480l-16-96-208 0-16 96L16.1 480 0 480l1.8-16 41-368L160 32l160 0 160 0L597.2 96l41 368 1.8 16-16.1 0L440 480zM200.2 381.4l2.2-13.4 13.6 0 208 0 13.6 0 2.2 13.4L453.6 464l168.6 0L582.2 106.1 475.9 48 320 48 164.1 48 57.8 106.1 17.9 464l168.6 0 13.8-82.6zM200 160l0 56 56 0 8 0 0 16-8 0-56 0 0 56 0 8-16 0 0-8 0-56-56 0-8 0 0-16 8 0 56 0 0-56 0-8 16 0 0 8zM392 272a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zm40 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm64-160a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm24 40a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default GamepadModern;