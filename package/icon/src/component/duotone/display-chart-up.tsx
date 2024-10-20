
import { Icon, generic } from "../../index";

/**
 * A component that renders the `display-chart-up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/display-chart-up?s=duotone display-chart-up}
 * @preview ![display-chart-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/display-chart-up.svg)
 */
const DisplayChartUp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 352c0 35.3 28.7 64 64 64l176 0 96 0 176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64zm64 0l448 0 0 288L64 352 64 64z" />
        <path d="M64 64l448 0 0 288L64 352 64 64zM346.7 448l69.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l69.3 0L240 416l96 0 10.7 32zM344 112c-13.3 0-24 10.7-24 24s10.7 24 24 24l38.1 0L304 238.1l-63-63c-9.4-9.4-24.6-9.4-33.9 0l-88 88c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l71-71 63 63c4.5 4.5 10.6 7 17 7s12.5-2.5 17-7l95-95 0 38.1c0 13.3 10.7 24 24 24s24-10.7 24-24l0-96c0-13.3-10.7-24-24-24l-96 0z" />
    </Icon>
);

export default DisplayChartUp;