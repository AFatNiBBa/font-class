
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rectangles-mixed` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangles-mixed?s=duotone rectangles-mixed}
 * @preview ![rectangles-mixed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/rectangles-mixed.svg)
 */
const RectanglesMixed: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 352l0 80c0 26.5 21.5 48 48 48l176 0c26.5 0 48-21.5 48-48l0-80c0-26.5-21.5-48-48-48l-176 0c-26.5 0-48 21.5-48 48zM384 80l0 256c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-256c0-26.5-21.5-48-48-48l-96 0c-26.5 0-48 21.5-48 48z" />
        <path d="M0 80C0 53.5 21.5 32 48 32H272c26.5 0 48 21.5 48 48V208c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80z" />
    </Icon>
);

export default RectanglesMixed;