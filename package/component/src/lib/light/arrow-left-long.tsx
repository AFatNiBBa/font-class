
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left-long` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-long?s=light arrow-left-long}
 * @preview ![arrow-left-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrow-left-long.svg)
 */
const ArrowLeftLong: typeof Icon = x => (
    <Icon {...x}>
        <path d="M4.7 244.7c-6.2 6.2-6.2 16.4 0 22.6l144 144c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L54.6 272 496 272c8.8 0 16-7.2 16-16s-7.2-16-16-16L54.6 240 171.3 123.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-144 144z" />
    </Icon>
);

export default ArrowLeftLong;