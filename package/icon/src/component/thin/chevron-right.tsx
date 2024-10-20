
import { Icon } from "../../index";

/**
 * A component that renders the `chevron-right` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-right?s=thin chevron-right}
 * @preview ![chevron-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/chevron-right.svg)
 */
const ChevronRight: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M301.7 250.3c3.1 3.1 3.1 8.2 0 11.3l-216 216c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L284.7 256 74.3 45.7c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l216 216z" />
    </Icon>
);

export default ChevronRight;