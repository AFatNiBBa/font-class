
import { Icon, generic } from "../../index";

/**
 * A component that renders the `forward` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forward?s=duotone forward}
 * @preview ![forward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/forward.svg)
 */
const Forward: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 12.4 7.2 23.7 18.4 29s24.5 3.6 34.1-4.4L256 271l0-30L52.5 71.4C46.6 66.5 39.3 64 32 64c-4.6 0-9.2 1-13.6 3C7.2 72.3 0 83.6 0 96z" />
        <path d="M308.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29l0-320c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160z" />
    </Icon>
);

export default Forward;