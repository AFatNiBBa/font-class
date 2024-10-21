
import { Icon } from "../../index";

/**
 * A component that renders the `signal-good` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-good?s=regular signal-good}
 * @preview ![signal-good](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/signal-good.svg)
 */
const SignalGood: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 192c13.3 0 24 10.7 24 24l0 272c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-272c0-13.3 10.7-24 24-24zM192 288c13.3 0 24 10.7 24 24l0 176c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-176c0-13.3 10.7-24 24-24zM64 384c13.3 0 24 10.7 24 24l0 80c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-80c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default SignalGood;