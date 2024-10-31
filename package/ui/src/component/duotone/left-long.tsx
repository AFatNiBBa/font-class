
import { Icon, generic } from "../../index";

/**
 * A component that renders the `left-long` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-long?s=duotone left-long}
 * @preview ![left-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/left-long.svg)
 */
const LeftLong: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 192c42.7 0 85.3 0 128 0l160 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32c-96 0-192 0-288 0l0-128z" />
        <path d="M151.5 102.6c7-6.6 17.2-8.4 26-4.6s14.5 12.5 14.5 22l0 72 0 128 0 72c0 9.6-5.7 18.2-14.5 22s-19 2-26-4.6l-144-136C2.7 268.9 0 262.6 0 256s2.7-12.9 7.5-17.4l144-136z" />
    </Icon>
);

export default LeftLong;