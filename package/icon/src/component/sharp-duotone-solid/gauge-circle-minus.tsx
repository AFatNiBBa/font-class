
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gauge-circle-minus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-circle-minus?s=sharp-duotone-solid gauge-circle-minus}
 * @preview ![gauge-circle-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/gauge-circle-minus.svg)
 */
const GaugeCircleMinus: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512c39.5 0 77-9 110.4-25C337.6 455.7 320 413.9 320 368c0-97.2 78.8-176 176-176c2.7 0 5.3 .1 8 .2C475.6 81.7 375.4 0 256 0C114.6 0 0 114.6 0 256zm128 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm48-112a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm16 208c0-26.9 16.5-49.9 40-59.3L232 88l0-24 48 0 0 24 0 204.7c23.5 9.5 40 32.5 40 59.3c0 35.3-28.7 64-64 64s-64-28.7-64-64zM400 144a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M496 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm64-128l-128 0-16 0 0-32 16 0 128 0 16 0 0 32-16 0z" />
    </Icon>
);

export default GaugeCircleMinus;