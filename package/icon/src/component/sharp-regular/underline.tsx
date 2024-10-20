
import { Icon } from "../../index";

/**
 * A component that renders the `underline` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/underline?s=sharp-regular underline}
 * @preview ![underline](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/underline.svg)
 */
const Underline: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 32l24 0 96 0 24 0 0 48-24 0-24 0 0 144c0 61.9 50.1 112 112 112s112-50.1 112-112l0-144-24 0-24 0 0-48 24 0 96 0 24 0 0 48-24 0-24 0 0 144c0 88.4-71.6 160-160 160s-160-71.6-160-160L64 80 40 80 16 80l0-48zM0 432l24 0 400 0 24 0 0 48-24 0L24 480 0 480l0-48z" />
    </Icon>
);

export default Underline;