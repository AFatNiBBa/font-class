
import { Icon, generic } from "../../index";

/**
 * A component that renders the `glass-citrus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/glass-citrus?s=sharp-duotone-solid glass-citrus}
 * @preview ![glass-citrus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/glass-citrus.svg)
 */
const GlassCitrus: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 128l6.7 64L40 512l272 0c7.9-75.9 15.8-151.7 23.7-227.6l6.7-64.5c1-9.3 1.9-18.6 2.9-27.8l6.7-64-62.4 0-1.9 0-62.8 0L64.3 128 0 128zm71 64l210 0c-2.2 21.3-4.4 42.7-6.7 64c-6.7 64-13.3 128-20 192L97.7 448l-20-192c-2.2-21.3-4.4-42.7-6.7-64z" />
        <path d="M368 224c44.2 0 80-35.8 80-80s-35.8-80-80-80c-38.7 0-71 27.5-78.4 64l-64.7 0c8-72 69-128 143.1-128c79.5 0 144 64.5 144 144s-64.5 144-144 144c-11.1 0-21.9-1.3-32.3-3.6l6.7-64.5c8 2.7 16.6 4.2 25.6 4.2zM97.7 448l-20-192 196.6 0-20 192L97.7 448z" />
    </Icon>
);

export default GlassCitrus;