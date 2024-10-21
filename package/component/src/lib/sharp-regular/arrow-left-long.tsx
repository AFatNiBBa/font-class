
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left-long` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-long?s=sharp-regular arrow-left-long}
 * @preview ![arrow-left-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrow-left-long.svg)
 */
const ArrowLeftLong: typeof Icon = x => (
    <Icon {...x}>
        <path d="M17 239L0 256l17 17L153 409l17 17L203.9 392l-17-17-95-95L488 280l24 0 0-48-24 0L91.9 232l95-95 17-17L169.9 86.1l-17 17L17 239z" />
    </Icon>
);

export default ArrowLeftLong;