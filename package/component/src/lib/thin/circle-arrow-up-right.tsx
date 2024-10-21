
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-up-right` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-up-right?s=thin circle-arrow-up-right}
 * @preview ![circle-arrow-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-arrow-up-right.svg)
 */
const CircleArrowUpRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 496a240 240 0 1 0 0-480 240 240 0 1 0 0 480zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM200 160l144 0c4.4 0 8 3.6 8 8l0 144c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-124.7L173.7 349.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L324.7 176 200 176c-4.4 0-8-3.6-8-8s3.6-8 8-8z" />
    </Icon>
);

export default CircleArrowUpRight;