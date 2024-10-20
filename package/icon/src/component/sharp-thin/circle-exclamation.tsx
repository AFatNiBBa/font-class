
import { Icon } from "../../index";

/**
 * A component that renders the `circle-exclamation` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-exclamation?s=sharp-thin circle-exclamation}
 * @preview ![circle-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-exclamation.svg)
 */
const CircleExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm8-384l-16 0 0 8 0 160 0 8 16 0 0-8 0-160 0-8zM240 368l32 0 0-32-32 0 0 32z" />
    </Icon>
);

export default CircleExclamation;