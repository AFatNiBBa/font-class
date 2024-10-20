
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-up-left` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-up-left?s=thin circle-arrow-up-left}
 * @preview ![circle-arrow-up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-arrow-up-left.svg)
 */
const CircleArrowUpLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm56-352l-144 0c-4.4 0-8 3.6-8 8l0 144c0 4.4 3.6 8 8 8s8-3.6 8-8l0-124.7L338.3 349.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L187.3 176 312 176c4.4 0 8-3.6 8-8s-3.6-8-8-8z" />
    </Icon>
);

export default CircleArrowUpLeft;