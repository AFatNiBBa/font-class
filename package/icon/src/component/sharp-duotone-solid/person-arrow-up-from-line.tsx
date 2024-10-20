
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-arrow-up-from-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-arrow-up-from-line?s=sharp-duotone-solid person-arrow-up-from-line}
 * @preview ![person-arrow-up-from-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-arrow-up-from-line.svg)
 */
const PersonArrowUpFromLine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32.2 270.8l53.9 34.4 33.8-53L120 448l64 0 0-96 16 0 0 96 64 0 0-195.8 33.8 53 53.9-34.4L270 142.8 260.6 128l-17.5 0-102.2 0-17.5 0-9.4 14.8-81.7 128zM144 48a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M621.3 144l-22.6-22.6-80-80L496 18.7 473.4 41.4l-80 80L370.7 144 416 189.3l22.6-22.6L464 141.3 464 384l0 32 64 0 0-32 0-242.7 25.4 25.4L576 189.3 621.3 144zM32 448L0 448l0 64 32 0 576 0 32 0 0-64-32 0L32 448z" />
    </Icon>
);

export default PersonArrowUpFromLine;