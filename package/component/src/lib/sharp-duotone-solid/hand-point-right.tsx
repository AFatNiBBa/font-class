
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-point-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-point-right?s=sharp-duotone-solid hand-point-right}
 * @preview ![hand-point-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hand-point-right.svg)
 */
const HandPointRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 226.3L0 288c0 88.4 71.6 160 160 160l0-96 32 0 0-64-48 0-16 0 0-16 0-112 0-16 32 0 0 16 0 96 32 0 48 0 0-192-91 0c-33.9 0-66.5 13.5-90.5 37.5L46.9 113.1C16.9 143.1 0 183.8 0 226.3zM272 96l0 64 240 0 0-64L272 96z" />
        <path d="M384 192l0 64-112 0 0-64 112 0zm-32 96l0 64-128 0 0-64 128 0zM320 448l-128 0 0-64 128 0 0 64z" />
    </Icon>
);

export default HandPointRight;