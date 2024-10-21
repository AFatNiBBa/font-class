
import { Icon } from "../../index";

/**
 * A component that renders the `glass-empty` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/glass-empty?s=sharp-thin glass-empty}
 * @preview ![glass-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/glass-empty.svg)
 */
const GlassEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M54.8 496l274.4 0L366.7 16 17.3 16 54.8 496zM344 512L40 512 1.3 16 0 0 16 0 368 0l16 0-1.3 16L344 512z" />
    </Icon>
);

export default GlassEmpty;