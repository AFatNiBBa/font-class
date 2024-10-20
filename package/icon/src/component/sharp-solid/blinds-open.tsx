
import { Icon } from "../../index";

/**
 * A component that renders the `blinds-open` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blinds-open?s=sharp-solid blinds-open}
 * @preview ![blinds-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/blinds-open.svg)
 */
const BlindsOpen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L32 0 480 0l32 0 0 64-32 0L160 64l0 64 0 64 0 66.7c13.6 4.8 24.4 15.6 29.3 29.3c.1 .3 .2 .7 .4 1c1.5 4.7 2.4 9.7 2.4 15c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-5.6 1-11 2.7-16c4.8-13.6 15.6-24.4 29.3-29.3l0-66.7 0-64 0-64L32 64 0 64 0 0zM40 128l56 0 0 64L0 192l40-64zm0 160l25.6 0c-1 5.2-1.6 10.5-1.6 16c0 18 6 34.6 16 48L0 352l40-64zm472 64l-304 0c10-13.4 16-30 16-48c0-5.5-.6-10.8-1.6-16L472 288l40 64zm0-160l-320 0 0-64 280 0 40 64zM0 512l40-64 432 0 40 64L0 512z" />
    </Icon>
);

export default BlindsOpen;