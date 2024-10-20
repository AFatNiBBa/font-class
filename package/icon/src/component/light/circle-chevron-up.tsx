
import { Icon } from "../../index";

/**
 * A component that renders the `circle-chevron-up` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-up?s=light circle-chevron-up}
 * @preview ![circle-chevron-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-chevron-up.svg)
 */
const CircleChevronUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM379.3 276.7l-112-112c-6.2-6.2-16.4-6.2-22.6 0l-112 112c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L256 198.6 356.7 299.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6z" />
    </Icon>
);

export default CircleChevronUp;