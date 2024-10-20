
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plane-circle-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane-circle-check?s=sharp-duotone-solid plane-circle-check}
 * @preview ![plane-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/plane-circle-check.svg)
 */
const PlaneCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 288l0 96 192-64 0 80-64 48 0 64 128-32 128 32 0-8.2c-39.1-32.3-64-81.1-64-135.8c0-64.1 34.3-120.2 85.5-151L320 160l0-66.3C320 59.5 292 0 256 0c-35 0-64 59.5-64 93.7l0 66.3L0 288z" />
        <path d="M496 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm67.3-164.7l-72 72L480 430.6l-11.3-11.3-40-40L417.4 368 440 345.4l11.3 11.3L480 385.4l60.7-60.7L552 313.4 574.6 336l-11.3 11.3z" />
    </Icon>
);

export default PlaneCircleCheck;