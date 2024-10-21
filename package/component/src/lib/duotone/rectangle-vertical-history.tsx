
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rectangle-vertical-history` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-vertical-history?s=duotone rectangle-vertical-history}
 * @preview ![rectangle-vertical-history](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/rectangle-vertical-history.svg)
 */
const RectangleVerticalHistory: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 120L0 392c0 13.3 10.7 24 24 24s24-10.7 24-24l0-272c0-13.3-10.7-24-24-24S0 106.7 0 120zM96 72l0 368c0 13.3 10.7 24 24 24s24-10.7 24-24l0-368c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
        <path d="M192 64c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H256c-35.3 0-64-28.7-64-64V64z" />
    </Icon>
);

export default RectangleVerticalHistory;