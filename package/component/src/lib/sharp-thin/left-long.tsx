
import { Icon } from "../../index";

/**
 * A component that renders the `left-long` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-long?s=sharp-thin left-long}
 * @preview ![left-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/left-long.svg)
 */
const LeftLong: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 296l16 0 304 0 0-80-304 0-16 0 0-16 0-88-9.4 0L22.6 256l144 144 9.4 0 0-88 0-16zM160 416L11.3 267.3 0 256l11.3-11.3L160 96l16 0 16 0 0 16 0 72 0 16 16 0 288 0 16 0 0 16 0 80 0 16-16 0-288 0-16 0 0 16 0 72 0 16-16 0-16 0z" />
    </Icon>
);

export default LeftLong;