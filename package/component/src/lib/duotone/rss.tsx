
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rss` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rss?s=duotone rss}
 * @preview ![rss](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/rss.svg)
 */
const Rss: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 81.7 14.3 96 32 96c194.4 0 352 157.6 352 352c0 17.7 14.3 32 32 32s32-14.3 32-32C448 218.2 261.8 32 32 32C14.3 32 0 46.3 0 64zM0 192c0 17.7 14.3 32 32 32c123.7 0 224 100.3 224 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-159.1-128.9-288-288-288c-17.7 0-32 14.3-32 32z" />
        <path d="M0 416a64 64 0 1 1 128 0A64 64 0 1 1 0 416z" />
    </Icon>
);

export default Rss;