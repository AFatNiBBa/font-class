
import { Icon } from "../../index";

/**
 * A component that renders the `circle-chevron-up` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-up?s=sharp-thin circle-chevron-up}
 * @preview ![circle-chevron-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-chevron-up.svg)
 */
const CircleChevronUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm5.7-341.7l-5.7-5.7-5.7 5.7-120 120-5.7 5.7L136 307.3l5.7-5.7L256 187.3 370.3 301.7l5.7 5.7L387.3 296l-5.7-5.7-120-120z" />
    </Icon>
);

export default CircleChevronUp;