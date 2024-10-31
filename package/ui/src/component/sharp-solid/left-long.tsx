
import { Icon } from "../../index";

/**
 * A component that renders the `left-long` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-long?s=sharp-solid left-long}
 * @preview ![left-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/left-long.svg)
 */
const LeftLong: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256L160 96l32 0 0 96 320 0 0 128-320 0 0 96-32 0L0 256z" />
    </Icon>
);

export default LeftLong;