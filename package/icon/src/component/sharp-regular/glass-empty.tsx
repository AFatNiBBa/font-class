
import { Icon } from "../../index";

/**
 * A component that renders the `glass-empty` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/glass-empty?s=sharp-regular glass-empty}
 * @preview ![glass-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/glass-empty.svg)
 */
const GlassEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M84.4 464l215.2 0L332.1 48 51.9 48 84.4 464zM344 512L40 512 3.8 48 0 0 48.1 0 335.9 0 384 0l-3.8 48L344 512z" />
    </Icon>
);

export default GlassEmpty;