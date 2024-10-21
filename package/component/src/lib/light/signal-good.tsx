
import { Icon } from "../../index";

/**
 * A component that renders the `signal-good` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-good?s=light signal-good}
 * @preview ![signal-good](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/signal-good.svg)
 */
const SignalGood: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M336 208c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16s16-7.2 16-16l0-288zM192 288c-8.8 0-16 7.2-16 16l0 192c0 8.8 7.2 16 16 16s16-7.2 16-16l0-192c0-8.8-7.2-16-16-16zM64 384c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96c0-8.8-7.2-16-16-16z" />
    </Icon>
);

export default SignalGood;