
import { Icon } from "../../index";

/**
 * A component that renders the `columns-3` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/columns-3?s=sharp-thin columns-3}
 * @preview ![columns-3](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/columns-3.svg)
 */
const Columns_3: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 48l0 416 176 0 0-416L448 48zm-16 0L208 48l0 416 224 0 0-416zM192 464l0-416L16 48l0 416 176 0zM0 32l16 0 608 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32z" />
    </Icon>
);

export default Columns_3;