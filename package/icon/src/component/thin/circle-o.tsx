
import { Icon } from "../../index";

/**
 * A component that renders the `circle-o` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-o?s=thin circle-o}
 * @preview ![circle-o](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-o.svg)
 */
const CircleO: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM368 256a112 112 0 1 1 -224 0 112 112 0 1 1 224 0zM256 128a128 128 0 1 0 0 256 128 128 0 1 0 0-256z" />
    </Icon>
);

export default CircleO;