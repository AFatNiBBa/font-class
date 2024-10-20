
import { Icon } from "../../index";

/**
 * A component that renders the `rectangles-mixed` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangles-mixed?s=sharp-thin rectangles-mixed}
 * @preview ![rectangles-mixed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/rectangles-mixed.svg)
 */
const RectanglesMixed: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M304 48l0 192L16 240 16 48l288 0zM16 32L0 32 0 48 0 240l0 16 16 0 288 0 16 0 0-16 0-192 0-16-16 0L16 32zM560 48l0 320-160 0 0-320 160 0zM400 32l-16 0 0 16 0 320 0 16 16 0 160 0 16 0 0-16 0-320 0-16-16 0L400 32zM80 320l240 0 0 144L80 464l0-144zM64 304l0 16 0 144 0 16 16 0 240 0 16 0 0-16 0-144 0-16-16 0L80 304l-16 0z" />
    </Icon>
);

export default RectanglesMixed;