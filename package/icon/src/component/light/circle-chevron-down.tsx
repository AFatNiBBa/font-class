
import { Icon } from "../../index";

/**
 * A component that renders the `circle-chevron-down` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-down?s=light circle-chevron-down}
 * @preview ![circle-chevron-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-chevron-down.svg)
 */
const CircleChevronDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 480a224 224 0 1 1 0-448 224 224 0 1 1 0 448zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM132.7 235.3l112 112c6.2 6.2 16.4 6.2 22.6 0l112-112c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L256 313.4 155.3 212.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6z" />
    </Icon>
);

export default CircleChevronDown;