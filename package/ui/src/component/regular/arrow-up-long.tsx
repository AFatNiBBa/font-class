
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-long` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-long?s=regular arrow-up-long}
 * @preview ![arrow-up-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrow-up-long.svg)
 */
const ArrowUpLong: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M209 7c-9.4-9.4-24.6-9.4-33.9 0L39 143c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l95-95L168 488c0 13.3 10.7 24 24 24s24-10.7 24-24l0-406.1 95 95c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L209 7z" />
    </Icon>
);

export default ArrowUpLong;