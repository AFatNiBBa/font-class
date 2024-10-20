
import { Icon } from "../../index";

/**
 * A component that renders the `glass-empty` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/glass-empty?s=sharp-solid glass-empty}
 * @preview ![glass-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/glass-empty.svg)
 */
const GlassEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M99.2 448l185.6 0 30-384L69.2 64l30 384zM344 512L40 512 5 64 0 0 64.2 0 319.8 0 384 0l-5 64L344 512z" />
    </Icon>
);

export default GlassEmpty;