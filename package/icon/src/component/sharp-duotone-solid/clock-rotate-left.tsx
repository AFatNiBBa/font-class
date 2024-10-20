
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-rotate-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-rotate-left?s=sharp-duotone-solid clock-rotate-left}
 * @preview ![clock-rotate-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/clock-rotate-left.svg)
 */
const ClockRotateLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 16L0 192l176 0-63.5-63.5C147.7 88.9 198.9 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4l-36.6 52.5C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C181.2 0 113.9 32.1 67.2 83.2L0 16z" />
        <path d="M280 128l0 24 0 94.1 57 57 17 17L320 353.9l-17-17-64-64-7-7 0-9.9 0-104 0-24 48 0z" />
    </Icon>
);

export default ClockRotateLeft;