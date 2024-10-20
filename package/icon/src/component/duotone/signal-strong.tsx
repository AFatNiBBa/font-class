
import { Icon, generic } from "../../index";

/**
 * A component that renders the `signal-strong` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-strong?s=duotone signal-strong}
 * @preview ![signal-strong](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/signal-strong.svg)
 */
const SignalStrong: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M544 32l0 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-448c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
        <path d="M480 128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 352c0 17.7 14.3 32 32 32s32-14.3 32-32l0-352zM352 224c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32l0-256zM192 288c-17.7 0-32 14.3-32 32l0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32zM96 416c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64z" />
    </Icon>
);

export default SignalStrong;