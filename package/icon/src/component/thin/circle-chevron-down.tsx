
import { Icon } from "../../index";

/**
 * A component that renders the `circle-chevron-down` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-down?s=thin circle-chevron-down}
 * @preview ![circle-chevron-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-chevron-down.svg)
 */
const CircleChevronDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 0 0 480 240 240 0 1 0 0-480zm0 496A256 256 0 1 1 256 0a256 256 0 1 1 0 512zM381.7 221.7l-120 120c-3.1 3.1-8.2 3.1-11.3 0l-120-120c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L256 324.7 370.3 210.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3z" />
    </Icon>
);

export default CircleChevronDown;