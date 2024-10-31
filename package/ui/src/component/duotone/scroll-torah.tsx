
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scroll-torah` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scroll-torah?s=duotone scroll-torah}
 * @preview ![scroll-torah](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/scroll-torah.svg)
 */
const ScrollTorah: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 32l0 448 448 0 0-448L96 32zM196 198.3c0-10.1 8.2-18.3 18.3-18.3l56.7 0 31.4-53.9c3.6-6.3 10.3-10.1 17.6-10.1s13.9 3.8 17.6 10.1L369 180l56.7 0c10.1 0 18.3 8.2 18.3 18.3c0 3.2-.9 6.4-2.5 9.2L413.3 256l28.3 48.5c1.6 2.8 2.5 6 2.5 9.2c0 10.1-8.2 18.3-18.3 18.3L369 332l-31.4 53.9c-3.6 6.3-10.3 10.1-17.6 10.1s-13.9-3.8-17.6-10.1L271 332l-56.7 0c-10.1 0-18.3-8.2-18.3-18.3c0-3.2 .9-6.4 2.5-9.2L226.7 256l-28.3-48.5c-1.6-2.8-2.5-6-2.5-9.2zm28.2 5.7l16.4 28.2L257 204l-32.8 0zm0 104l32.8 0-16.4-28.2L224.2 308zm30.3-52l30.3 52 70.4 0 30.3-52-30.3-52-70.4 0-30.3 52zm44.3-76l42.4 0L320 143.6 298.8 180zm0 152L320 368.4 341.2 332l-42.4 0zM383 204l16.4 28.2L415.8 204 383 204zm0 104l32.8 0-16.4-28.2L383 308z" />
        <path d="M96 480L96 32C96 14.3 74.5 0 48 0S0 14.3 0 32L0 480c0 17.7 21.5 32 48 32s48-14.3 48-32zm544 0l0-448c0-17.7-21.5-32-48-32s-48 14.3-48 32l0 448c0 17.7 21.5 32 48 32s48-14.3 48-32z" />
    </Icon>
);

export default ScrollTorah;