
import { Icon } from "../../index";

/**
 * A component that renders the `circle-o` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-o?s=light circle-o}
 * @preview ![circle-o](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-o.svg)
 */
const CircleO: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm96-256a96 96 0 1 1 -192 0 96 96 0 1 1 192 0zM256 128a128 128 0 1 0 0 256 128 128 0 1 0 0-256z" />
    </Icon>
);

export default CircleO;