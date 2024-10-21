
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-code` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-code?s=sharp-light rectangle-code}
 * @preview ![rectangle-code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/rectangle-code.svg)
 */
const RectangleCode: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 64l0 384L32 448 32 64l448 0zM32 32L0 32 0 64 0 448l0 32 32 0 448 0 32 0 0-32 0-384 0-32-32 0L32 32zM281.4 182.7l10.6 12L346.6 256 292 317.4l-10.6 12 23.9 21.3 10.6-12 64-72 9.4-10.6L380 245.4l-64-72-10.6-12-23.9 21.3zm-61.5 12l10.6-12-23.9-21.3-10.6 12-64 72L122.6 256l9.4 10.6 64 72 10.6 12 23.9-21.3-10.6-12L165.4 256 220 194.6z" />
    </Icon>
);

export default RectangleCode;