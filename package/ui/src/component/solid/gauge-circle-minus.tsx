
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-circle-minus` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-circle-minus?s=solid gauge-circle-minus}
 * @preview ![gauge-circle-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/gauge-circle-minus.svg)
 */
const GaugeCircleMinus: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M496 192c2.7 0 5.3 .1 8 .2C475.6 81.7 375.4 0 256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c39.5 0 77-9 110.4-25C337.6 455.7 320 413.9 320 368c0-97.2 78.8-176 176-176zM320 352c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-26.9 16.5-49.9 40-59.3L232 88c0-13.3 10.7-24 24-24s24 10.7 24 24l0 204.7c23.5 9.5 40 32.5 40 59.3zM144 112a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM64 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM336 144a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM640 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-64 0c0 8.8-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l128 0c8.8 0 16 7.2 16 16z" />
    </Icon>
);

export default GaugeCircleMinus;