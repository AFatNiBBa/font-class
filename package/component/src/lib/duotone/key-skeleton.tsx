
import { Icon, generic } from "../../index";

/**
 * A component that renders the `key-skeleton` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/key-skeleton?s=duotone key-skeleton}
 * @preview ![key-skeleton](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/key-skeleton.svg)
 */
const KeySkeleton: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 416c0 8.2 3.1 16.4 9.4 22.6l64 64c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L77.3 416 96 397.3l41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L141.3 352l86.1-86.1c-18.3-11.5-33.8-27-45.3-45.3L9.4 393.4C3.1 399.6 0 407.8 0 416z" />
        <path d="M304 64a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm0 224A144 144 0 1 0 304 0a144 144 0 1 0 0 288z" />
    </Icon>
);

export default KeySkeleton;