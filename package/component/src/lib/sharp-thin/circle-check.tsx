
import { Icon } from "../../index";

/**
 * A component that renders the `circle-check` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-check?s=sharp-thin circle-check}
 * @preview ![circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-check.svg)
 */
const CircleCheck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM357.7 197.7l5.7-5.7L352 180.7l-5.7 5.7L224 308.7l-58.3-58.3-5.7-5.7L148.7 256l5.7 5.7 64 64 5.7 5.7 5.7-5.7 128-128z" />
    </Icon>
);

export default CircleCheck;