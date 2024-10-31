
import { Icon } from "../../index";

/**
 * A component that renders the `signal-good` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-good?s=sharp-thin signal-good}
 * @preview ![signal-good](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/signal-good.svg)
 */
const SignalGood: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M328 200l0-8-16 0 0 8 0 304 0 8 16 0 0-8 0-304zM200 288l-16 0 0 8 0 208 0 8 16 0 0-8 0-208 0-8zM72 384l-16 0 0 8 0 112 0 8 16 0 0-8 0-112 0-8z" />
    </Icon>
);

export default SignalGood;