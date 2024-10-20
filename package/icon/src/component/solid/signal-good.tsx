
import { Icon } from "../../index";

/**
 * A component that renders the `signal-good` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-good?s=solid signal-good}
 * @preview ![signal-good](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/signal-good.svg)
 */
const SignalGood: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 192c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32zM192 288c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160c0-17.7 14.3-32 32-32zM96 416l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
    </Icon>
);

export default SignalGood;