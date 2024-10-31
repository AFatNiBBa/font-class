
import { Icon } from "../../index";

/**
 * A component that renders the `circle-chevron-down` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-down?s=sharp-light circle-chevron-down}
 * @preview ![circle-chevron-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-chevron-down.svg)
 */
const CircleChevronDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 0 0 448 224 224 0 1 0 0-448zm0 480A256 256 0 1 1 256 0a256 256 0 1 1 0 512zm11.3-164.7L256 358.6l-11.3-11.3-112-112L121.4 224 144 201.4l11.3 11.3L256 313.4 356.7 212.7 368 201.4 390.6 224l-11.3 11.3-112 112z" />
    </Icon>
);

export default CircleChevronDown;