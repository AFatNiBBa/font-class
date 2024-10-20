
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-long` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-long?s=regular arrow-right-long}
 * @preview ![arrow-right-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrow-right-long.svg)
 */
const ArrowRightLong: typeof Icon = x => (
    <Icon {...x}>
        <path d="M505 273c9.4-9.4 9.4-24.6 0-33.9L369 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l95 95L24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l406.1 0-95 95c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L505 273z" />
    </Icon>
);

export default ArrowRightLong;