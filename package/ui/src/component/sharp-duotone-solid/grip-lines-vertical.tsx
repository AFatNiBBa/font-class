
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grip-lines-vertical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grip-lines-vertical?s=sharp-duotone-solid grip-lines-vertical}
 * @preview ![grip-lines-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/grip-lines-vertical.svg)
 */
const GripLinesVertical: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path class={generic.secondary} d="M128 32l64 0 0 448-64 0 0-448z" />
        <path d="M0 32H64V480H0V32z" />
    </Icon>
);

export default GripLinesVertical;