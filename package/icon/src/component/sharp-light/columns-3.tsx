
import { Icon } from "../../index";

/**
 * A component that renders the `columns-3` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/columns-3?s=sharp-light columns-3}
 * @preview ![columns-3](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/columns-3.svg)
 */
const Columns_3: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 64l0 384 160 0 0-384L448 64zm-32 0L224 64l0 384 192 0 0-384zM192 448l0-384L32 64l0 384 160 0zM0 32l32 0 576 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32z" />
    </Icon>
);

export default Columns_3;