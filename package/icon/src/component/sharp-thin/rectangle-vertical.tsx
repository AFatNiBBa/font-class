
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-vertical` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-vertical?s=sharp-thin rectangle-vertical}
 * @preview ![rectangle-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/rectangle-vertical.svg)
 */
const RectangleVertical: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M368 496L16 496 16 16l352 0 0 480zM384 16l0-16L368 0 16 0 0 0 0 16 0 496l0 16 16 0 352 0 16 0 0-16 0-480z" />
    </Icon>
);

export default RectangleVertical;