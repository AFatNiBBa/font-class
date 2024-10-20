
import { Icon } from "../../index";

/**
 * A component that renders the `rectangles-mixed` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangles-mixed?s=sharp-solid rectangles-mixed}
 * @preview ![rectangles-mixed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/rectangles-mixed.svg)
 */
const RectanglesMixed: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 32l320 0 0 224L0 256 0 32zm384 0l192 0 0 352-192 0 0-352zM336 304l0 176L64 480l0-176 272 0z" />
    </Icon>
);

export default RectanglesMixed;