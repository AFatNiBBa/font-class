
import { Icon } from "../../index";

/**
 * A component that renders the `signal-fair` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-fair?s=light signal-fair}
 * @preview ![signal-fair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/signal-fair.svg)
 */
const SignalFair: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M208 304c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 192c0 8.8 7.2 16 16 16s16-7.2 16-16l0-192zM80 400c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96z" />
    </Icon>
);

export default SignalFair;