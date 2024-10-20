
import { Icon } from "../../index";

/**
 * A component that renders the `signal-fair` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-fair?s=sharp-light signal-fair}
 * @preview ![signal-fair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/signal-fair.svg)
 */
const SignalFair: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M208 304l0-16-32 0 0 16 0 192 0 16 32 0 0-16 0-192zM80 400l0-16-32 0 0 16 0 96 0 16 32 0 0-16 0-96z" />
    </Icon>
);

export default SignalFair;