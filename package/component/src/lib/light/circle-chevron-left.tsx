
import { Icon } from "../../index";

/**
 * A component that renders the `circle-chevron-left` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-left?s=light circle-chevron-left}
 * @preview ![circle-chevron-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-chevron-left.svg)
 */
const CircleChevronLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 256a224 224 0 1 1 448 0A224 224 0 1 1 32 256zm480 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM276.7 132.7l-112 112c-6.2 6.2-6.2 16.4 0 22.6l112 112c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L198.6 256 299.3 155.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0z" />
    </Icon>
);

export default CircleChevronLeft;