
import { Icon, generic } from "../../index";

/**
 * A component that renders the `omega` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/omega?s=duotone omega}
 * @preview ![omega](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/omega.svg)
 */
const Omega: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M224 96C135.6 96 64 167.6 64 256c0 56.4 29.1 106 73.3 134.5c13.3 8.6 22.7 23.7 22.7 41.2c0 26.7-21.6 48.3-48.3 48.3L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l35.2 0C25.8 375.4 0 318.7 0 256C0 132.3 100.3 32 224 32s224 100.3 224 224c0 62.7-25.8 119.4-67.2 160l35.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-79.7 0c-26.7 0-48.3-21.6-48.3-48.3c0-17.5 9.4-32.6 22.7-41.2C354.9 362 384 312.4 384 256c0-88.4-71.6-160-160-160z" />
    </Icon>
);

export default Omega;