
import { Icon } from "../../index";

/**
 * A component that renders the `circle-caret-down` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-down?s=sharp-light circle-caret-down}
 * @preview ![circle-caret-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-caret-down.svg)
 */
const CircleCaretDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 0 0 448 224 224 0 1 0 0-448zm0 480A256 256 0 1 1 256 0a256 256 0 1 1 0 512zM128 192l32 0 192 0 32 0 0 32 0 8L256 352 128 232l0-8 0-32zM256 308.1L345.7 224l-179.5 0L256 308.1z" />
    </Icon>
);

export default CircleCaretDown;