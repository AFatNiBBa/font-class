
import { Icon } from "../../index";

/**
 * A component that renders the `circle-check` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-check?s=sharp-light circle-check}
 * @preview ![circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-check.svg)
 */
const CircleCheck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM363.3 203.3L374.6 192 352 169.4l-11.3 11.3L224 297.4l-52.7-52.7L160 233.4 137.4 256l11.3 11.3 64 64L224 342.6l11.3-11.3 128-128z" />
    </Icon>
);

export default CircleCheck;