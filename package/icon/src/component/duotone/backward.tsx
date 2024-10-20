
import { Icon, generic } from "../../index";

/**
 * A component that renders the `backward` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backward?s=duotone backward}
 * @preview ![backward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/backward.svg)
 */
const Backward: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 241l0 30L459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-320c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L256 241z" />
        <path d="M203.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-320c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160z" />
    </Icon>
);

export default Backward;