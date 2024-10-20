
import { Icon, generic } from "../../index";

/**
 * A component that renders the `road-circle-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road-circle-check?s=sharp-duotone-solid road-circle-check}
 * @preview ![road-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/road-circle-check.svg)
 */
const RoadCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 480l256 0 0-64 0-32 32.7 0c-.5-5.3-.7-10.6-.7-16c0-16.6 2.3-32.7 6.6-48L288 320l0-32 0-64 0-32 64 0 0 32 0 42.8c31.9-45.2 84.5-74.8 144-74.8c10.4 0 20.6 .9 30.5 2.6L480 32 352 32l0 64 0 32-64 0 0-32 0-64L160 32 32 480z" />
        <path d="M496 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm67.3-164.7l-72 72L480 430.6l-11.3-11.3-40-40L417.4 368 440 345.4l11.3 11.3L480 385.4l60.7-60.7L552 313.4 574.6 336l-11.3 11.3z" />
    </Icon>
);

export default RoadCircleCheck;