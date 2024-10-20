
import { Icon } from "../../index";

/**
 * A component that renders the `inbox-in` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inbox-in?s=sharp-light inbox-in}
 * @preview ![inbox-in](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/inbox-in.svg)
 */
const InboxIn: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 16l0 249.4 84.7-84.7L368 169.4 390.6 192l-11.3 11.3-112 112L256 326.6l-11.3-11.3-112-112L121.4 192 144 169.4l11.3 11.3L240 265.4 240 16l0-16 32 0 0 16zM32 320l112 0 32 64 160 0 32-64 112 0 32 0 0 32 0 128 0 32-32 0L32 512 0 512l0-32L0 352l0-32 32 0zm332.6 78.3L355.8 416 336 416l-160 0-19.8 0-8.8-17.7L124.2 352 32 352l0 128 448 0 0-128-92.2 0-23.2 46.3z" />
    </Icon>
);

export default InboxIn;