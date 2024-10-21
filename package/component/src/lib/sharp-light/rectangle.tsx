
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle?s=sharp-light rectangle}
 * @preview ![rectangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/rectangle.svg)
 */
const Rectangle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 96l0 320L32 416 32 96l448 0zM32 64L0 64 0 96 0 416l0 32 32 0 448 0 32 0 0-32 0-320 0-32-32 0L32 64z" />
    </Icon>
);

export default Rectangle;