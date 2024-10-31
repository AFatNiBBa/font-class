
import { Icon } from "../../index";

/**
 * A component that renders the `glass-empty` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/glass-empty?s=sharp-light glass-empty}
 * @preview ![glass-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/glass-empty.svg)
 */
const GlassEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M69.6 480l244.8 0 35-448L34.6 32l35 448zM344 512L40 512 2.5 32 0 0 32.1 0 351.9 0 384 0l-2.5 32L344 512z" />
    </Icon>
);

export default GlassEmpty;