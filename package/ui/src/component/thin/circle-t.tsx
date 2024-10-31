
import { Icon } from "../../index";

/**
 * A component that renders the `circle-t` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-t?s=thin circle-t}
 * @preview ![circle-t](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-t.svg)
 */
const CircleT: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM136 144c-4.4 0-8 3.6-8 8s3.6 8 8 8l112 0 0 232c0 4.4 3.6 8 8 8s8-3.6 8-8l0-232 112 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-120 0-120 0z" />
    </Icon>
);

export default CircleT;