
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-pointer` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-pointer?s=duotone arrow-pointer}
 * @preview ![arrow-pointer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-pointer.svg)
 */
const ArrowPointer: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M121.2 346c7.6-8.7 15.2-17.3 22.8-26l35.8 0 56.8 113.7c2.3 4.6 3.4 9.5 3.4 14.3c0 11.7-6.5 23-17.7 28.6c-4.6 2.3-9.5 3.4-14.3 3.4c-11.7 0-23-6.5-28.6-17.7L121.2 346z" />
        <path d="M0 426V55.2C0 42.4 10.4 32 23.2 32c5.7 0 11.2 2.1 15.4 5.9l274 243.6c4.7 4.2 7.4 10.2 7.4 16.5c0 12.2-9.9 22.1-22.1 22.1H144L38.6 440.5C34.4 445.3 28.4 448 22 448c-12.2 0-22-9.9-22-22z" />
    </Icon>
);

export default ArrowPointer;