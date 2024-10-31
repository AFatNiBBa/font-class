
import { Icon } from "../../index";

/**
 * A component that renders the `circle-c` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-c?s=light circle-c}
 * @preview ![circle-c](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-c.svg)
 */
const CircleC: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM188.1 323.9c-37.5-37.5-37.5-98.3 0-135.8s98.3-37.5 135.8 0c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0c-37.5 37.5-98.3 37.5-135.8 0z" />
    </Icon>
);

export default CircleC;