
import { Icon, generic } from "../../index";

/**
 * A component that renders the `forward-fast` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forward-fast?s=duotone forward-fast}
 * @preview ![forward-fast](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/forward-fast.svg)
 */
const ForwardFast: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M448 96l0 118.3 0 83.3L448 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
        <path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416L0 96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3 224 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4L448 214.3l0 83.3L276.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29l0-118.3L52.5 440.6z" />
    </Icon>
);

export default ForwardFast;