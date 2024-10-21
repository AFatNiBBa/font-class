
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle?s=sharp-thin rectangle}
 * @preview ![rectangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/rectangle.svg)
 */
const Rectangle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 80l0 352L16 432 16 80l480 0zM16 64L0 64 0 80 0 432l0 16 16 0 480 0 16 0 0-16 0-352 0-16-16 0L16 64z" />
    </Icon>
);

export default Rectangle;