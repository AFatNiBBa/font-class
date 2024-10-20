
import { Icon } from "../../index";

/**
 * A component that renders the `octagon-xmark` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon-xmark?s=sharp-regular octagon-xmark}
 * @preview ![octagon-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/octagon-xmark.svg)
 */
const OctagonXmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 332.1l0-152.2L179.9 48l152.2 0L464 179.9l0 152.2L332.1 464l-152.2 0L48 332.1zM160 0L0 160 0 352 160 512l192 0L512 352l0-192L352 0 160 0zM353.9 192L320 158.1l-17 17-47 47-47-47-17-17L158.1 192l17 17 47 47-47 47-17 17L192 353.9l17-17 47-47 47 47 17 17L353.9 320l-17-17-47-47 47-47 17-17z" />
    </Icon>
);

export default OctagonXmark;