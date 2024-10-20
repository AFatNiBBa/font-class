
import { Icon } from "../../index";

/**
 * A component that renders the `right-long-to-line` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-long-to-line?s=sharp-solid right-long-to-line}
 * @preview ![right-long-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/right-long-to-line.svg)
 */
const RightLongToLine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M640 96l0-32-64 0 0 32 0 320 0 32 64 0 0-32 0-320zM352 416L512 256 352 96l-32 0 0 96L0 192 0 320l320 0 0 96 32 0z" />
    </Icon>
);

export default RightLongToLine;