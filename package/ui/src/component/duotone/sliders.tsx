
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sliders` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sliders?s=duotone sliders}
 * @preview ![sliders](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/sliders.svg)
 */
const Sliders: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96C0 78.3 14.3 64 32 64l86.7 0c-2.1 4.9-3.8 10.1-4.9 15.4c-.6 2.7-1 5.4-1.3 8.2c-.1 1.4-.3 2.8-.3 4.2s-.1 2.8-.1 4.2c0 11.4 2.4 22.2 6.7 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l246.7 0c-2.1 4.9-3.8 10.1-4.9 15.4c-.6 2.7-1 5.4-1.3 8.2c-.1 1.4-.3 2.8-.3 4.2s-.1 2.8-.1 4.2c0 11.4 2.4 22.2 6.7 32L32 288c-17.7 0-32-14.3-32-32zM0 416c0-17.7 14.3-32 32-32l54.7 0c-2.1 4.9-3.8 10.1-4.9 15.4c-.6 2.7-1 5.4-1.3 8.2c-.1 1.4-.3 2.8-.3 4.2s-.1 2.8-.1 4.2c0 11.4 2.4 22.2 6.7 32L32 448c-17.7 0-32-14.3-32-32zm233.3-32L480 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-246.7 0c2.1-4.9 3.8-10.1 4.9-15.4c.6-2.7 1-5.4 1.3-8.2c.1-1.4 .3-2.8 .3-4.2s.1-2.8 .1-4.2c0-11.4-2.4-22.2-6.7-32zm32-320L480 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-214.7 0c2.1-4.9 3.8-10.1 4.9-15.4c.6-2.7 1-5.4 1.3-8.2c.1-1.4 .3-2.8 .3-4.2s.1-2.8 .1-4.2c0-11.4-2.4-22.2-6.7-32zm160 160l54.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-54.7 0c2.1-4.9 3.8-10.1 4.9-15.4c.6-2.7 1-5.4 1.3-8.2c.1-1.4 .3-2.8 .3-4.2s.1-2.8 .1-4.2c0-11.4-2.4-22.2-6.7-32z" />
        <path d="M128 416a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm112 0A80 80 0 1 0 80 416a80 80 0 1 0 160 0zm80-160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm112 0a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm0-112a80 80 0 1 0 0 160 80 80 0 1 0 0-160z" />
    </Icon>
);

export default Sliders;