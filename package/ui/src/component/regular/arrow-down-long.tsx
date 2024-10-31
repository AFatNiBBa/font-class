
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-long` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-long?s=regular arrow-down-long}
 * @preview ![arrow-down-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrow-down-long.svg)
 */
const ArrowDownLong: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M175 505c9.4 9.4 24.6 9.4 33.9 0L345 369c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-95 95L216 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 406.1L73 335c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L175 505z" />
    </Icon>
);

export default ArrowDownLong;