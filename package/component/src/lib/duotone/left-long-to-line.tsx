
import { Icon, generic } from "../../index";

/**
 * A component that renders the `left-long-to-line` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-long-to-line?s=duotone left-long-to-line}
 * @preview ![left-long-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/left-long-to-line.svg)
 */
const LeftLongToLine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 17.7 14.3 32 32 32s32-14.3 32-32L64 96c0-17.7-14.3-32-32-32S0 78.3 0 96z" />
        <path d="M305.5 414c-8.8 3.8-19 2-26-4.6l-144-136c-4.8-4.5-7.5-10.8-7.5-17.4s2.7-12.9 7.5-17.4l144-136c7-6.6 17.2-8.4 26-4.6s14.5 12.5 14.5 22l0 72 288 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-288 0 0 72c0 9.6-5.7 18.2-14.5 22z" />
    </Icon>
);

export default LeftLongToLine;