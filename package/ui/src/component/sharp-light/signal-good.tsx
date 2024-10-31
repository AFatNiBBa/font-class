
import { Icon } from "../../index";

/**
 * A component that renders the `signal-good` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-good?s=sharp-light signal-good}
 * @preview ![signal-good](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/signal-good.svg)
 */
const SignalGood: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M336 208l0-16-32 0 0 16 0 288 0 16 32 0 0-16 0-288zM208 288l-32 0 0 16 0 192 0 16 32 0 0-16 0-192 0-16zM80 384l-32 0 0 16 0 96 0 16 32 0 0-16 0-96 0-16z" />
    </Icon>
);

export default SignalGood;