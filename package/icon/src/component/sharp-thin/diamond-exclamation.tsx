
import { Icon } from "../../index";

/**
 * A component that renders the `diamond-exclamation` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond-exclamation?s=sharp-thin diamond-exclamation}
 * @preview ![diamond-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/diamond-exclamation.svg)
 */
const DiamondExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M11.3 267.3L0 256l11.3-11.3L244.7 11.3 256 0l11.3 11.3L500.7 244.7 512 256l-11.3 11.3L267.3 500.7 256 512l-11.3-11.3L11.3 267.3zM22.6 256L256 489.4 489.4 256 256 22.6 22.6 256zM264 128l0 8 0 160 0 8-16 0 0-8 0-160 0-8 16 0zM240 368l0-32 32 0 0 32-32 0z" />
    </Icon>
);

export default DiamondExclamation;