
import { Icon } from "../../index";

/**
 * A component that renders the `octagon-exclamation` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon-exclamation?s=sharp-regular octagon-exclamation}
 * @preview ![octagon-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/octagon-exclamation.svg)
 */
const OctagonExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 332.1l0-152.2L179.9 48l152.2 0L464 179.9l0 152.2L332.1 464l-152.2 0L48 332.1zM160 0L0 160 0 352 160 512l192 0L512 352l0-192L352 0 160 0zM280 128l-48 0 0 24 0 112 0 24 48 0 0-24 0-112 0-24zM232 320l0 48 48 0 0-48-48 0z" />
    </Icon>
);

export default OctagonExclamation;