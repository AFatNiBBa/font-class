
import { Icon, generic } from "../../index";

/**
 * A component that renders the `anchor-circle-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/anchor-circle-check?s=sharp-duotone-solid anchor-circle-check}
 * @preview ![anchor-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/anchor-circle-check.svg)
 */
const AnchorCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 352l64 0 0 128 0 32 32 0 192 0 106.8 0c-23.3-16.4-42.5-38.4-55.6-64L320 448l0-79.5 0-.5 0-.5L320 240l32 0 23.2 0c2.8-2.7 5.8-5.3 8.8-7.8l0-56.2-32 0-10.9 0C367 158.8 384 129.4 384 96c0-53-43-96-96-96s-96 43-96 96c0 33.4 17 62.8 42.9 80L224 176l-32 0 0 64 32 0 32 0 0 208-128 0 0-96 64 0L96 256 0 352zM320 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M496 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm67.3-164.7l-72 72L480 430.6l-11.3-11.3-40-40L417.4 368 440 345.4l11.3 11.3L480 385.4l60.7-60.7L552 313.4 574.6 336l-11.3 11.3z" />
    </Icon>
);

export default AnchorCircleCheck;