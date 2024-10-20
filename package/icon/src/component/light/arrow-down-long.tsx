
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-long` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-long?s=light arrow-down-long}
 * @preview ![arrow-down-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrow-down-long.svg)
 */
const ArrowDownLong: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M180.7 507.3c6.2 6.2 16.4 6.2 22.6 0l144-144c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L208 457.4 208 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 441.4L59.3 340.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l144 144z" />
    </Icon>
);

export default ArrowDownLong;