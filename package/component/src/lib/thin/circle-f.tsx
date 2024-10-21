
import { Icon } from "../../index";

/**
 * A component that renders the `circle-f` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-f?s=thin circle-f}
 * @preview ![circle-f](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-f.svg)
 */
const CircleF: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 128c-13.3 0-24 10.7-24 24l0 96 0 128c0 4.4 3.6 8 8 8s8-3.6 8-8l0-120 136 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-136 0 0-88c0-4.4 3.6-8 8-8l160 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-160 0z" />
    </Icon>
);

export default CircleF;