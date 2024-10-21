
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-radar` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-radar?s=duotone chart-radar}
 * @preview ![chart-radar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chart-radar.svg)
 */
const ChartRadar: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M13.8 223.8c-11.6 19.9-11.6 44.6 0 64.5l93.3 160c11.5 19.7 32.5 31.8 55.3 31.8l187.2 0c22.8 0 43.8-12.1 55.3-31.8l93.3-160c5.8-10 8.7-21.1 8.7-32.2s-2.9-22.3-8.7-32.2l-93.3-160C393.4 44.1 372.4 32 349.6 32L162.4 32c-22.8 0-43.8 12.1-55.3 31.8l-93.3 160zM69 256L162.4 96l187.2 0L443 256 349.6 416l-187.2 0L69 256z" />
        <path d="M290.2 180.8c3.7-6.1 5.8-13.2 5.8-20.8c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 3.9 .6 7.7 1.6 11.2L160 248c-22.1 0-40 17.9-40 40s17.9 40 40 40c10.2 0 19.6-3.9 26.7-10.2l97.2 19.4c6.4 13.5 20.2 22.7 36.1 22.7c22.1 0 40-17.9 40-40c0-18.5-12.6-34.1-29.6-38.6L290.2 180.8zm-8.9 107L202 271.9l47.5-63.4 31.7 79.2z" />
    </Icon>
);

export default ChartRadar;