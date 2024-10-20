
import { Icon } from "../../index";

/**
 * A component that renders the `signal-fair` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-fair?s=sharp-thin signal-fair}
 * @preview ![signal-fair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/signal-fair.svg)
 */
const SignalFair: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M200 296l0-8-16 0 0 8 0 208 0 8 16 0 0-8 0-208zM72 392l0-8-16 0 0 8 0 112 0 8 16 0 0-8 0-112z" />
    </Icon>
);

export default SignalFair;