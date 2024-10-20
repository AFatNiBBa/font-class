
import { Icon } from "../../index";

/**
 * A component that renders the `octagon-check` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon-check?s=sharp-regular octagon-check}
 * @preview ![octagon-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/octagon-check.svg)
 */
const OctagonCheck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 332.1l0-152.2L179.9 48l152.2 0L464 179.9l0 152.2L332.1 464l-152.2 0L48 332.1zM160 0L0 160 0 352 160 512l192 0L512 352l0-192L352 0 160 0zM369 209l17-17L352 158.1l-17 17-111 111-47-47-17-17L126.1 256l17 17 64 64 17 17 17-17L369 209z" />
    </Icon>
);

export default OctagonCheck;