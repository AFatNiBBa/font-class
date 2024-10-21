
import { Icon } from "../../index";

/**
 * A component that renders the `signal-fair` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-fair?s=regular signal-fair}
 * @preview ![signal-fair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/signal-fair.svg)
 */
const SignalFair: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M192 288c13.3 0 24 10.7 24 24l0 176c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-176c0-13.3 10.7-24 24-24zM64 384c13.3 0 24 10.7 24 24l0 80c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-80c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default SignalFair;