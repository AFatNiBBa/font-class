
import { Icon, generic } from "../../index";

/**
 * A component that renders the `signal-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-slash?s=duotone signal-slash}
 * @preview ![signal-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/signal-slash.svg)
 */
const SignalSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 416l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32zm128-96l0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32s-32 14.3-32 32zm128 2.9L288 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-106.7-64-50.4zm6.1-117.7c19.3 15.1 38.6 30.3 57.9 45.4l0-26.6c0-17.7-14.3-32-32-32c-10.7 0-20.1 5.2-25.9 13.2zM416 128l0 172.7c21.3 16.7 42.7 33.4 64 50.2L480 128c0-17.7-14.3-32-32-32s-32 14.3-32 32zm0 295.8l0 56.2c0 17.7 14.3 32 32 32s32-14.3 32-32l0-5.8-64-50.4zM544 32l0 369.1c21.3 16.7 42.7 33.4 64 50.2L608 32c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default SignalSlash;