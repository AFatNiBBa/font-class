
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-long` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-long?s=sharp-regular arrow-right-long}
 * @preview ![arrow-right-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrow-right-long.svg)
 */
const ArrowRightLong: typeof Icon = x => (
    <Icon {...x}>
        <path d="M495 273l17-17-17-17L359 103l-17-17L308.1 120l17 17 95 95L24 232 0 232l0 48 24 0 396.1 0-95 95-17 17 33.9 33.9 17-17L495 273z" />
    </Icon>
);

export default ArrowRightLong;