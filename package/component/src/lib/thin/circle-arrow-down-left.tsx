
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-down-left` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-down-left?s=thin circle-arrow-down-left}
 * @preview ![circle-arrow-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-arrow-down-left.svg)
 */
const CircleArrowDownLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 0 0 480 240 240 0 1 0 0-480zm0 496A256 256 0 1 1 256 0a256 256 0 1 1 0 512zm56-160l-144 0c-4.4 0-8-3.6-8-8l0-144c0-4.4 3.6-8 8-8s8 3.6 8 8l0 124.7L338.3 162.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L187.3 336 312 336c4.4 0 8 3.6 8 8s-3.6 8-8 8z" />
    </Icon>
);

export default CircleArrowDownLeft;