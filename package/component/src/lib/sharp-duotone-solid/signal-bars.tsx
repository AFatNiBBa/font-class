
import { Icon } from "../../index";

/**
 * A component that renders the `signal-bars` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-bars?s=sharp-duotone-solid signal-bars}
 * @preview ![signal-bars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/signal-bars.svg)
 */
const SignalBars: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M608 0L512 0l0 512 96 0L608 0zM352 128l0 384 96 0 0-384-96 0zM288 256l-96 0 0 256 96 0 0-256zM128 384l-96 0 0 128 96 0 0-128z" />
    </Icon>
);

export default SignalBars;