
import { Icon } from "../../index";

/**
 * A component that renders the `signal-bars-fair` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-bars-fair?s=sharp-solid signal-bars-fair}
 * @preview ![signal-bars-fair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/signal-bars-fair.svg)
 */
const SignalBarsFair: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M288 256l-96 0 0 256 96 0 0-256zM128 384l-96 0 0 128 96 0 0-128z" />
    </Icon>
);

export default SignalBarsFair;