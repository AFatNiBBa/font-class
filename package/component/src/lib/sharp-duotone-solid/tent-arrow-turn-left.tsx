
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tent-arrow-turn-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tent-arrow-turn-left?s=sharp-duotone-solid tent-arrow-turn-left}
 * @preview ![tent-arrow-turn-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tent-arrow-turn-left.svg)
 */
const TentArrowTurnLeft: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 512l224 0 0-160 96 160 128 0L480 288 288 160 96 288 64 512z" />
        <path d="M126.7 35.2l-17 17L89.9 72 456 72c66.3 0 120 53.7 120 120l0 40 0 24-48 0 0-24 0-40c0-39.8-32.2-72-72-72L89.9 120l19.8 19.8 17 17L92.8 190.7l-17-17L15 113l-17-17L15 79 75.8 18.2l17-17 33.9 33.9z" />
    </Icon>
);

export default TentArrowTurnLeft;