
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grip-lines-vertical` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grip-lines-vertical?s=duotone grip-lines-vertical}
 * @preview ![grip-lines-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/grip-lines-vertical.svg)
 */
const GripLinesVertical: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path class={generic.secondary} d="M128 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-384z" />
        <path d="M0 64C0 46.3 14.3 32 32 32s32 14.3 32 32V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V64z" />
    </Icon>
);

export default GripLinesVertical;