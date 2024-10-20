
import { Icon, generic } from "../../index";

/**
 * A component that renders the `utility-pole-double` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/utility-pole-double?s=sharp-duotone-solid utility-pole-double}
 * @preview ![utility-pole-double](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/utility-pole-double.svg)
 */
const UtilityPoleDouble: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32l48 0 0 24 0 8L0 64l0-8L0 32zM0 224l48 0 0 24 0 8L0 256l0-8 0-24zM80 32l48 0 0 24 0 8L80 64l0-8 0-24zm0 192l48 0 0 24 0 8-48 0 0-8 0-24zm3.2-96l57.7 0L224 183.4l0 38.5L83.2 128zm0 192l57.7 0L224 375.4l0 38.5L83.2 320zM288 183.4L371.2 128l57.7 0L288 221.9l0-38.5zm0 192L371.2 320l57.7 0L288 413.9l0-38.5zM384 32l48 0 0 24 0 8-48 0 0-8 0-24zm0 192l48 0 0 24 0 8-48 0 0-8 0-24zM464 32l48 0 0 24 0 8-48 0 0-8 0-24zm0 192l48 0 0 24 0 8-48 0 0-8 0-24z" />
        <path d="M288 0V64H512v64H288V256H512v64H288V512H224V320H0V256H224V128H0V64H224V0h64z" />
    </Icon>
);

export default UtilityPoleDouble;