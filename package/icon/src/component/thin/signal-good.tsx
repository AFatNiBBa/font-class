
import { Icon } from "../../index";

/**
 * A component that renders the `signal-good` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-good?s=thin signal-good}
 * @preview ![signal-good](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/signal-good.svg)
 */
const SignalGood: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M328 200c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 304c0 4.4 3.6 8 8 8s8-3.6 8-8l0-304zM192 288c-4.4 0-8 3.6-8 8l0 208c0 4.4 3.6 8 8 8s8-3.6 8-8l0-208c0-4.4-3.6-8-8-8zM64 384c-4.4 0-8 3.6-8 8l0 112c0 4.4 3.6 8 8 8s8-3.6 8-8l0-112c0-4.4-3.6-8-8-8z" />
    </Icon>
);

export default SignalGood;