
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-wide` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-wide?s=sharp-thin rectangle-wide}
 * @preview ![rectangle-wide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/rectangle-wide.svg)
 */
const RectangleWide: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M624 80l0 352L16 432 16 80l608 0zM16 64L0 64 0 80 0 432l0 16 16 0 608 0 16 0 0-16 0-352 0-16-16 0L16 64z" />
    </Icon>
);

export default RectangleWide;