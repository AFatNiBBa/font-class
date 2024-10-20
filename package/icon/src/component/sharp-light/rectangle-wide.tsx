
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-wide` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-wide?s=sharp-light rectangle-wide}
 * @preview ![rectangle-wide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/rectangle-wide.svg)
 */
const RectangleWide: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M608 96l0 320L32 416 32 96l576 0zM32 64L0 64 0 96 0 416l0 32 32 0 576 0 32 0 0-32 0-320 0-32-32 0L32 64z" />
    </Icon>
);

export default RectangleWide;