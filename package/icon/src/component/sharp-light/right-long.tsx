
import { Icon } from "../../index";

/**
 * A component that renders the `right-long` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-long?s=sharp-light right-long}
 * @preview ![right-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/right-long.svg)
 */
const RightLong: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 216l-32 0L32 216l0 80 288 0 32 0 0 32 0 42.7L466.7 256 352 141.3l0 42.7 0 32zm-32-88l0-32 32 0L489.4 233.4 512 256l-22.6 22.6L352 416l-32 0 0-32 0-24 0-32-32 0L32 328 0 328l0-32 0-80 0-32 32 0 256 0 32 0 0-32 0-24z" />
    </Icon>
);

export default RightLong;