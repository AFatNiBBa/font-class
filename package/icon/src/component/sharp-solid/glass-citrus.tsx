
import { Icon } from "../../index";

/**
 * A component that renders the `glass-citrus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/glass-citrus?s=sharp-solid glass-citrus}
 * @preview ![glass-citrus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/glass-citrus.svg)
 */
const GlassCitrus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 144c0-44.2-35.8-80-80-80c-26.2 0-49.4 12.6-64 32l-71.8 0C252 40.1 305.3 0 368 0c79.5 0 144 64.5 144 144s-64.5 144-144 144l-.5 0 6.7-64.2c41.3-3.2 73.8-37.7 73.8-79.8zM274.3 256l6.7-64L71 192l6.7 64 196.6 0zM312 512L40 512 6.7 192 0 128l64.3 0 223.3 0 64.3 0-6.7 64L312 512z" />
    </Icon>
);

export default GlassCitrus;