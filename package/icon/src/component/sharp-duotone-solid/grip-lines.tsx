
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grip-lines` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grip-lines?s=sharp-duotone-solid grip-lines}
 * @preview ![grip-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/grip-lines.svg)
 */
const GripLines: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 288l0 64 448 0 0-64L0 288z" />
        <path d="M448 160l0 64L0 224l0-64 448 0z" />
    </Icon>
);

export default GripLines;