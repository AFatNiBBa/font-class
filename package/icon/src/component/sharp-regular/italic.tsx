
import { Icon } from "../../index";

/**
 * A component that renders the `italic` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/italic?s=sharp-regular italic}
 * @preview ![italic](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/italic.svg)
 */
const Italic: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M128 32l24 0 208 0 24 0 0 48-24 0-68.7 0L144.7 432l87.3 0 24 0 0 48-24 0L24 480 0 480l0-48 24 0 68.7 0L239.3 80 152 80l-24 0 0-48z" />
    </Icon>
);

export default Italic;