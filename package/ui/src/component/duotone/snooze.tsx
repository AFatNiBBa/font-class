
import { Icon, generic } from "../../index";

/**
 * A component that renders the `snooze` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snooze?s=duotone snooze}
 * @preview ![snooze](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/snooze.svg)
 */
const Snooze: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M160 32c0-17.7 14.3-32 32-32l96 0c12.1 0 23.2 6.8 28.6 17.7s4.3 23.8-3 33.5L256 128l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-12.1 0-23.2-6.8-28.6-17.7s-4.3-23.8 3-33.5L224 64l-32 0c-17.7 0-32-14.3-32-32zM288 256c0-17.7 14.3-32 32-32l96 0c12.1 0 23.2 6.8 28.6 17.7c2.3 4.5 3.4 9.4 3.4 14.3c0 6.8-2.2 13.6-6.4 19.2L384 352l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-12.1 0-23.2-6.8-28.6-17.7s-4.3-23.8 3-33.5L352 288l-32 0c-17.7 0-32-14.3-32-32z" />
        <path d="M0 288c0-17.7 14.3-32 32-32l160 0c12.4 0 23.7 7.2 29 18.4s3.6 24.5-4.4 34.1L100.3 448l91.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-12.4 0-23.7-7.2-29-18.4s-3.6-24.5 4.4-34.1L123.7 320 32 320c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default Snooze;