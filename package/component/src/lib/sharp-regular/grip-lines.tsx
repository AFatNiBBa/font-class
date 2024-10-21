
import { Icon } from "../../index";

/**
 * A component that renders the `grip-lines` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grip-lines?s=sharp-regular grip-lines}
 * @preview ![grip-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/grip-lines.svg)
 */
const GripLines: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 216l0-48L0 168l0 48 448 0zm0 128l0-48L0 296l0 48 448 0z" />
    </Icon>
);

export default GripLines;