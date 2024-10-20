
import { Icon, generic } from "../../index";

/**
 * A component that renders the `backward-fast` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backward-fast?s=duotone backward-fast}
 * @preview ![backward-fast](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/backward-fast.svg)
 */
const BackwardFast: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-118.3 0-83.3L64 96c0-17.7-14.3-32-32-32S0 78.3 0 96z" />
        <path d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-320c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3 288 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L64 214.3l0 83.3L235.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-118.3L459.5 440.6z" />
    </Icon>
);

export default BackwardFast;