
import { Icon, generic } from "../../index";

/**
 * A component that renders the `angles-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angles-right?s=duotone angles-right}
 * @preview ![angles-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/angles-right.svg)
 */
const AnglesRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 96c0 8.2 3.1 16.4 9.4 22.6L210.7 256 73.4 393.4C67.1 399.6 64 407.8 64 416s3.1 16.4 9.4 22.6s14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4l160-160c6.2-6.2 9.4-14.4 9.4-22.6s-3.1-16.4-9.4-22.6l-160-160C112.4 67.1 104.2 64 96 64s-16.4 3.1-22.6 9.4S64 87.8 64 96z" />
        <path d="M470.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L402.7 256 265.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
    </Icon>
);

export default AnglesRight;