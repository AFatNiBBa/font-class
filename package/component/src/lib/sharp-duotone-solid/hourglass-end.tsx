
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hourglass-end` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass-end?s=sharp-duotone-solid hourglass-end}
 * @preview ![hourglass-end](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hourglass-end.svg)
 */
const HourglassEnd: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M32 64l64 0 0 50.7 96 96 96-96L288 64l64 0 0 64 0 13.3-9.4 9.4L237.3 256 342.6 361.4l9.4 9.4 0 13.3 0 64c-21.3 0-42.7 0-64 0c-64 0-128 0-192 0l-64 0 0-64 0-13.3 9.4-9.4L146.7 256 41.4 150.6 32 141.3 32 128l0-64z" />
        <path d="M32 0L0 0 0 64l32 0 320 0 32 0 0-64L352 0 32 0zm0 448L0 448l0 64 32 0 320 0 32 0 0-64-32 0L32 448z" />
    </Icon>
);

export default HourglassEnd;