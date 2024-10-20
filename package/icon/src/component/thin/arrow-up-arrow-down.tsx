
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-arrow-down` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-arrow-down?s=thin arrow-up-arrow-down}
 * @preview ![arrow-up-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrow-up-arrow-down.svg)
 */
const ArrowUpArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M165.7 34.3c-3.1-3.1-8.2-3.1-11.3 0l-112 112c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L152 59.3 152 472c0 4.4 3.6 8 8 8s8-3.6 8-8l0-412.7 98.3 98.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-112-112zm368 331.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L424 452.7 424 40c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 412.7-98.3-98.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l112 112c3.1 3.1 8.2 3.1 11.3 0l112-112z" />
    </Icon>
);

export default ArrowUpArrowDown;