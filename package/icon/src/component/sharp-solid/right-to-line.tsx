
import { Icon } from "../../index";

/**
 * A component that renders the `right-to-line` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-to-line?s=sharp-solid right-to-line}
 * @preview ![right-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/right-to-line.svg)
 */
const RightToLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M192 96L352 256 192 416l-32 0 0-96L0 320 0 192l160 0 0-96 32 0zM384 416l0-320 0-32 64 0 0 32 0 320 0 32-64 0 0-32z" />
    </Icon>
);

export default RightToLine;