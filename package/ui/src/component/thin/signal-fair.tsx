
import { Icon } from "../../index";

/**
 * A component that renders the `signal-fair` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-fair?s=thin signal-fair}
 * @preview ![signal-fair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/signal-fair.svg)
 */
const SignalFair: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M200 296c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 208c0 4.4 3.6 8 8 8s8-3.6 8-8l0-208zM72 392c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 112c0 4.4 3.6 8 8 8s8-3.6 8-8l0-112z" />
    </Icon>
);

export default SignalFair;