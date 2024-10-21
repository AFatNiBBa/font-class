
import { Icon } from "../../index";

/**
 * A component that renders the `left-long-to-line` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-long-to-line?s=sharp-solid left-long-to-line}
 * @preview ![left-long-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/left-long-to-line.svg)
 */
const LeftLongToLine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 416l0 32 64 0 0-32L64 96l0-32L0 64 0 96 0 416zM288 96L128 256 288 416l32 0 0-96 320 0 0-128-320 0 0-96-32 0z" />
    </Icon>
);

export default LeftLongToLine;