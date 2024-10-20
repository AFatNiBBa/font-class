
import { Icon } from "../../index";

/**
 * A component that renders the `signal-strong` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-strong?s=sharp-solid signal-strong}
 * @preview ![signal-strong](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/signal-strong.svg)
 */
const SignalStrong: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M480 128l0-32-64 0 0 32 0 352 0 32 64 0 0-32 0-352zM352 224l0-32-64 0 0 32 0 256 0 32 64 0 0-32 0-256zM224 288l-64 0 0 32 0 160 0 32 64 0 0-32 0-160 0-32zM96 416l0-32-64 0 0 32 0 64 0 32 64 0 0-32 0-64z" />
    </Icon>
);

export default SignalStrong;