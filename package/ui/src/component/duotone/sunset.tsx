
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sunset` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sunset?s=duotone sunset}
 * @preview ![sunset](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/sunset.svg)
 */
const Sunset: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 380.6c0 3.2 1 6.4 2.8 9.1L86.1 464l74.9 0c7.9-63.1 61.7-112 127-112s119.1 48.9 127 112l74.9 0 51.3-74.3c3.1-4.5 3.7-10.2 1.6-15.2s-6.6-8.6-11.9-9.6L423 345 403.1 237.1c-1-5.3-4.6-9.8-9.6-11.9s-10.7-1.5-15.2 1.6L288 289.1l-90.3-62.3c-2.7-1.9-5.9-2.8-9.1-2.8c-2.1 0-4.2 .4-6.1 1.2c-5 2.1-8.6 6.6-9.6 11.9L153 345 45.1 364.9c-5.3 1-9.8 4.6-11.9 9.6c-.8 2-1.2 4-1.2 6.1zM193.3 464l189.3 0c-7.6-45.4-47.1-80-94.7-80s-87.1 34.6-94.7 80z" />
        <path d="M354.5 104.3L320 135.7 320 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 103.7-34.5-31.3c-13.1-11.9-33.3-10.9-45.2 2.2s-10.9 33.3 2.2 45.2l88 80c12.2 11.1 30.8 11.1 43.1 0l88-80c13.1-11.9 14-32.1 2.2-45.2s-32.1-14-45.2-2.2zM24 464c-13.3 0-24 10.7-24 24s10.7 24 24 24l528 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 464z" />
    </Icon>
);

export default Sunset;