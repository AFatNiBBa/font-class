
import { Icon, generic } from "../../index";

/**
 * A component that renders the `temperature-empty` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-empty?s=sharp-duotone-solid temperature-empty}
 * @preview ![temperature-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/temperature-empty.svg)
 */
const TemperatureEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M16 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-34.3-12-65.8-32-90.5L272 64l0-64L208 0 112 0 48 0l0 64 0 213.5C28 302.2 16 333.7 16 368zm64 0c0-19.1 6.6-36.5 17.8-50.3L112 300.2l0-22.7L112 64l96 0 0 213.5 0 22.7 14.2 17.6C233.4 331.5 240 348.9 240 368c0 44.2-35.8 80-80 80s-80-35.8-80-80z" />
        <path d="M112 368a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
    </Icon>
);

export default TemperatureEmpty;