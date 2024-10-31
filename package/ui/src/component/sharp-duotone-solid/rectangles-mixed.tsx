
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rectangles-mixed` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangles-mixed?s=sharp-duotone-solid rectangles-mixed}
 * @preview ![rectangles-mixed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/rectangles-mixed.svg)
 */
const RectanglesMixed: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 304l0 176 272 0 0-176L64 304zM384 32l0 352 192 0 0-352L384 32z" />
        <path d="M0 32H320V256H0V32z" />
    </Icon>
);

export default RectanglesMixed;