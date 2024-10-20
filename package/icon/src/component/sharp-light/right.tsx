
import { Icon } from "../../index";

/**
 * A component that renders the `right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right?s=sharp-light right}
 * @preview ![right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/right.svg)
 */
const Right: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M240 208l-32 0L32 208l0 96 176 0 32 0 0 32 0 80 2.7 0 160-160L242.8 96 240 96l0 80 0 32zM256 64L425.4 233.4 448 256l-22.6 22.6L256 448l-16 0-32 0 0-32 0-48 0-32-32 0L32 336 0 336l0-32 0-96 0-32 32 0 144 0 32 0 0-32 0-48 0-32 32 0 16 0z" />
    </Icon>
);

export default Right;