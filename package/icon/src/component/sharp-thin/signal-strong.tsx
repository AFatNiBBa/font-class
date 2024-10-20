
import { Icon } from "../../index";

/**
 * A component that renders the `signal-strong` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-strong?s=sharp-thin signal-strong}
 * @preview ![signal-strong](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/signal-strong.svg)
 */
const SignalStrong: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M456 104l0-8-16 0 0 8 0 400 0 8 16 0 0-8 0-400zM328 192l-16 0 0 8 0 304 0 8 16 0 0-8 0-304 0-8zM200 296l0-8-16 0 0 8 0 208 0 8 16 0 0-8 0-208zM72 392l0-8-16 0 0 8 0 112 0 8 16 0 0-8 0-112z" />
    </Icon>
);

export default SignalStrong;