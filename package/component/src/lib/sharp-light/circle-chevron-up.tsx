
import { Icon } from "../../index";

/**
 * A component that renders the `circle-chevron-up` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-up?s=sharp-light circle-chevron-up}
 * @preview ![circle-chevron-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-chevron-up.svg)
 */
const CircleChevronUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm11.3-347.3L256 153.4l-11.3 11.3-112 112L121.4 288 144 310.6l11.3-11.3L256 198.6 356.7 299.3 368 310.6 390.6 288l-11.3-11.3-112-112z" />
    </Icon>
);

export default CircleChevronUp;