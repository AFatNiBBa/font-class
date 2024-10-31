
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-arrow-down-to-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-arrow-down-to-line?s=sharp-duotone-solid person-arrow-down-to-line}
 * @preview ![person-arrow-down-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-arrow-down-to-line.svg)
 */
const PersonArrowDownToLine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32.2 270.8l53.9 34.4 33.8-53L120 448l64 0 0-96 16 0 0 96 64 0 0-195.8 33.8 53 53.9-34.4L270 142.8 260.6 128l-17.5 0-102.2 0-17.5 0-9.4 14.8-81.7 128zM144 48a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M464 32l0 32 0 242.7-25.4-25.4L416 258.7 370.7 304l22.6 22.6 80 80L496 429.3l22.6-22.6 80-80L621.3 304 576 258.7l-22.6 22.6L528 306.7 528 64l0-32-64 0zM32 448L0 448l0 64 32 0 576 0 32 0 0-64-32 0L32 448z" />
    </Icon>
);

export default PersonArrowDownToLine;