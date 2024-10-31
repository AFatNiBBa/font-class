
import { Icon } from "../../index";

/**
 * A component that renders the `signal-good` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-good?s=sharp-solid signal-good}
 * @preview ![signal-good](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/signal-good.svg)
 */
const SignalGood: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M352 192l0 32 0 256 0 32-64 0 0-32 0-256 0-32 64 0zM224 288l0 32 0 160 0 32-64 0 0-32 0-160 0-32 64 0zM96 416l0 64 0 32-64 0 0-32 0-64 0-32 64 0 0 32z" />
    </Icon>
);

export default SignalGood;