
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-long` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-long?s=light arrow-up-long}
 * @preview ![arrow-up-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrow-up-long.svg)
 */
const ArrowUpLong: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M203.3 4.7c-6.2-6.2-16.4-6.2-22.6 0l-144 144c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L176 54.6 176 496c0 8.8 7.2 16 16 16s16-7.2 16-16l0-441.4L324.7 171.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-144-144z" />
    </Icon>
);

export default ArrowUpLong;