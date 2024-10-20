
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle?s=solid rectangle}
 * @preview ![rectangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/rectangle.svg)
 */
const Rectangle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
    </Icon>
);

export default Rectangle;