
import { Icon } from "../../index";

/**
 * A component that renders the `grip-lines` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grip-lines?s=sharp-thin grip-lines}
 * @preview ![grip-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/grip-lines.svg)
 */
const GripLines: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 200l0-16L0 184l0 16 448 0zm0 128l0-16L0 312l0 16 448 0z" />
    </Icon>
);

export default GripLines;