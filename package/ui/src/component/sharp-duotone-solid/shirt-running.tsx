
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shirt-running` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shirt-running?s=sharp-duotone-solid shirt-running}
 * @preview ![shirt-running](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/shirt-running.svg)
 */
const ShirtRunning: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 256L0 393.8 343.6 148.4 336 128l0-48 0-16 0-32 0-32L272 0l0 32 0 48c0 44.2-35.8 80-80 80s-80-35.8-80-80l0-48 0-32L48 0l0 32 0 32 0 16 0 48L0 256zM0 472.5L0 512l384 0 0-256c-5.7-15.2-11.4-30.4-17.1-45.6C244.6 297.7 122.3 385.1 0 472.5z" />
        <path d="M343.6 148.4L0 393.8l0 78.6L366.9 210.4l-23.3-62z" />
    </Icon>
);

export default ShirtRunning;