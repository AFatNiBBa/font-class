
import { Icon } from "../../index";

/**
 * A component that renders the `right-long` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-long?s=sharp-solid right-long}
 * @preview ![right-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/right-long.svg)
 */
const RightLong: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 256L352 416l-32 0 0-96L0 320 0 192l320 0 0-96 32 0L512 256z" />
    </Icon>
);

export default RightLong;