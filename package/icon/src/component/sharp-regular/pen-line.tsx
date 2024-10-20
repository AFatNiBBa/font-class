
import { Icon } from "../../index";

/**
 * A component that renders the `pen-line` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-line?s=sharp-regular pen-line}
 * @preview ![pen-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/pen-line.svg)
 */
const PenLine: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M10.2 461L0 512l51-10.2L160 480 478.1 161.9 512 128 478.1 94.1 417.9 33.9 384 0 350.1 33.9 32 352 10.2 461zm51-10.2l15-75.1L321.9 129.9l60.1 60.1L136.3 435.8l-75.1 15zM248 464l-24 0 0 48 24 0 304 0 24 0 0-48-24 0-304 0z" />
    </Icon>
);

export default PenLine;