
import { Icon, generic } from "../../index";

/**
 * A component that renders the `signal-weak` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-weak?s=duotone signal-weak}
 * @preview ![signal-weak](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/signal-weak.svg)
 */
const SignalWeak: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M160 320l0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32s-32 14.3-32 32zm128-96l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32l0-256c0-17.7-14.3-32-32-32s-32 14.3-32 32zm128-96l0 352c0 17.7 14.3 32 32 32s32-14.3 32-32l0-352c0-17.7-14.3-32-32-32s-32 14.3-32 32zM544 32l0 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-448c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
        <path d="M64 384c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default SignalWeak;