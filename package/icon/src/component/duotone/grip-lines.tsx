
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grip-lines` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grip-lines?s=duotone grip-lines}
 * @preview ![grip-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/grip-lines.svg)
 */
const GripLines: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 320c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288c-17.7 0-32 14.3-32 32z" />
        <path d="M416 160c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 224c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0z" />
    </Icon>
);

export default GripLines;