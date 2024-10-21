
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sliders-simple` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sliders-simple?s=duotone sliders-simple}
 * @preview ![sliders-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/sliders-simple.svg)
 */
const SlidersSimple: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 160c0 17.7 14.3 32 32 32l293.5 0c-3.5-10-5.5-20.8-5.5-32c0-1.4 0-2.8 .1-4.2s.1-2.8 .3-4.1c.2-2.7 .6-5.5 1-8.1c.9-5.3 2.3-10.5 4.1-15.5L32 128c-17.7 0-32 14.3-32 32zM186.5 320c3.5 10 5.5 20.8 5.5 32c0 1.4 0 2.8-.1 4.2s-.1 2.8-.3 4.1c-.2 2.7-.6 5.5-1 8.1c-.9 5.3-2.3 10.5-4.1 15.5L480 384c17.7 0 32-14.3 32-32s-14.3-32-32-32l-293.5 0z" />
        <path d="M416 192a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm0-128a96 96 0 1 0 0 192 96 96 0 1 0 0-192zM96 384a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm0-128a96 96 0 1 0 0 192 96 96 0 1 0 0-192z" />
    </Icon>
);

export default SlidersSimple;