
import { Icon, generic } from "../../index";

/**
 * A component that renders the `timeline` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/timeline?s=duotone timeline}
 * @preview ![timeline](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/timeline.svg)
 */
const Timeline: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 256c0 17.7 14.3 32 32 32l256 0 0 54.7c9.8-4.3 20.6-6.7 32-6.7c1.4 0 2.8 0 4.2 .1s2.8 .2 4.2 .3c2.8 .3 5.5 .7 8.2 1.3c5.4 1.1 10.5 2.8 15.4 4.9l0-54.7 256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-54.7c-9.8 4.3-20.6 6.7-32 6.7c-1.4 0-2.8 0-4.2-.1c-1.4-.1-2.8-.2-4.2-.3c-2.8-.3-5.5-.7-8.2-1.3c-5.4-1.1-10.5-2.8-15.4-4.9l0 54.7-320 0 0-54.7c-9.8 4.3-20.6 6.7-32 6.7c-1.4 0-2.8 0-4.2-.1c-1.4-.1-2.8-.2-4.2-.3c-2.8-.3-5.5-.7-8.2-1.3c-5.4-1.1-10.5-2.8-15.4-4.9L96 224l-64 0c-17.7 0-32 14.3-32 32z" />
        <path d="M128 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 104a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM512 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 104a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM296 416a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104 0a80 80 0 1 0 -160 0 80 80 0 1 0 160 0z" />
    </Icon>
);

export default Timeline;