
import { Icon } from "../../index";

/**
 * A component that renders the `right-long` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-long?s=sharp-thin right-long}
 * @preview ![right-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/right-long.svg)
 */
const RightLong: typeof Icon = x => (
    <Icon {...x}>
        <path d="M336 216l-16 0L16 216l0 80 304 0 16 0 0 16 0 88 9.4 0 144-144-144-144-9.4 0 0 88 0 16zM352 96L500.7 244.7 512 256l-11.3 11.3L352 416l-16 0-16 0 0-16 0-72 0-16-16 0L16 312 0 312l0-16 0-80 0-16 16 0 288 0 16 0 0-16 0-72 0-16 16 0 16 0z" />
    </Icon>
);

export default RightLong;