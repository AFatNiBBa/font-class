
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left-long` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-long?s=regular arrow-left-long}
 * @preview ![arrow-left-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrow-left-long.svg)
 */
const ArrowLeftLong: typeof Icon = x => (
    <Icon {...x}>
        <path d="M7 239c-9.4 9.4-9.4 24.6 0 33.9L143 409c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-95-95L488 280c13.3 0 24-10.7 24-24s-10.7-24-24-24L81.9 232l95-95c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L7 239z" />
    </Icon>
);

export default ArrowLeftLong;