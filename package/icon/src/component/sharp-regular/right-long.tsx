
import { Icon } from "../../index";

/**
 * A component that renders the `right-long` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-long?s=sharp-regular right-long}
 * @preview ![right-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/right-long.svg)
 */
const RightLong: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 224l-48 0L48 224l0 64 256 0 48 0 0 48 0 12.1L444.1 256 352 163.9l0 12.1 0 48zm126.1-1.9L512 256l-33.9 33.9L352 416l-48 0 0-32 0-16 0-32-48 0L48 336 0 336l0-48 0-64 0-48 48 0 208 0 48 0 0-32 0-16 0-32 48 0L478.1 222.1z" />
    </Icon>
);

export default RightLong;