
import { Icon } from "../../index";

/**
 * A component that renders the `inbox-out` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inbox-out?s=sharp-light inbox-out}
 * @preview ![inbox-out](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/inbox-out.svg)
 */
const InboxOut: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 304l0 16-32 0 0-16 0-241.4-84.7 84.7L144 158.6 121.4 136l11.3-11.3 112-112L256 1.4l11.3 11.3 112 112L390.6 136 368 158.6l-11.3-11.3L272 62.6 272 304zM32 320l112 0 32 64 160 0 32-64 112 0 32 0 0 32 0 128 0 32-32 0L32 512 0 512l0-32L0 352l0-32 32 0zm332.6 78.3L355.8 416 336 416l-160 0-19.8 0-8.8-17.7L124.2 352 32 352l0 128 448 0 0-128-92.2 0-23.2 46.3z" />
    </Icon>
);

export default InboxOut;