
import { Icon, generic } from "../../index";

/**
 * A component that renders the `heart-circle-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-circle-check?s=sharp-duotone-solid heart-circle-check}
 * @preview ![heart-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/heart-circle-check.svg)
 */
const HeartCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 167.8c0 36 14.3 70.5 39.8 96L64 288 256 480l23.7-23.7c-15.1-26-23.7-56.1-23.7-88.3c0-97.2 78.8-176 176-176c26.4 0 51.4 5.8 73.8 16.2c4-13 6.2-26.6 6.2-40.4C512 92.8 451.2 32 376.2 32c-36 0-70.5 14.3-96 39.8L256 96 231.8 71.8c-25.5-25.5-60-39.8-96-39.8C60.8 32 0 92.8 0 167.8z" />
        <path d="M432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm67.3-164.7l-72 72L416 430.6l-11.3-11.3-40-40L353.4 368 376 345.4l11.3 11.3L416 385.4l60.7-60.7L488 313.4 510.6 336l-11.3 11.3z" />
    </Icon>
);

export default HeartCircleCheck;