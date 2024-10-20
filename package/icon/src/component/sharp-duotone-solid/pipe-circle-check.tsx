
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pipe-circle-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe-circle-check?s=sharp-duotone-solid pipe-circle-check}
 * @preview ![pipe-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pipe-circle-check.svg)
 */
const PipeCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96l0 32L0 384l0 32 64 0 0-32 0-256 0-32L0 96zm96 32l0 256 224.7 0c-.5-5.3-.7-10.6-.7-16c0-68.4 39-127.7 96-156.8l0-83.2L96 128zM448 96l0 32 0 70.6c15.3-4.3 31.4-6.6 48-6.6c5.4 0 10.7 .2 16 .7l0-64.7 0-32-64 0z" />
        <path d="M496 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm67.3-164.7l-72 72L480 430.6l-11.3-11.3-40-40L417.4 368 440 345.4l11.3 11.3L480 385.4l60.7-60.7L552 313.4 574.6 336l-11.3 11.3z" />
    </Icon>
);

export default PipeCircleCheck;