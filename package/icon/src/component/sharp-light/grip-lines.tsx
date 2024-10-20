
import { Icon } from "../../index";

/**
 * A component that renders the `grip-lines` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grip-lines?s=sharp-light grip-lines}
 * @preview ![grip-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/grip-lines.svg)
 */
const GripLines: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 208l0-32L0 176l0 32 448 0zm0 128l0-32L0 304l0 32 448 0z" />
    </Icon>
);

export default GripLines;