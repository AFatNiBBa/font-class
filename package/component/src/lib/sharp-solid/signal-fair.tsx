
import { Icon } from "../../index";

/**
 * A component that renders the `signal-fair` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-fair?s=sharp-solid signal-fair}
 * @preview ![signal-fair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/signal-fair.svg)
 */
const SignalFair: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 320l0-32-64 0 0 32 0 160 0 32 64 0 0-32 0-160zM96 416l0-32-64 0 0 32 0 64 0 32 64 0 0-32 0-64z" />
    </Icon>
);

export default SignalFair;