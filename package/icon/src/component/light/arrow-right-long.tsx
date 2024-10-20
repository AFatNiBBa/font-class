
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-long` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-long?s=light arrow-right-long}
 * @preview ![arrow-right-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrow-right-long.svg)
 */
const ArrowRightLong: typeof Icon = x => (
    <Icon {...x}>
        <path d="M507.3 267.3c6.2-6.2 6.2-16.4 0-22.6l-144-144c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L457.4 240 16 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l441.4 0L340.7 388.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l144-144z" />
    </Icon>
);

export default ArrowRightLong;