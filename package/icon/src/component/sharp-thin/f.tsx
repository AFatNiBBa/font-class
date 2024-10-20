
import { Icon } from "../../index";

/**
 * A component that renders the `f` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/f?s=sharp-thin f}
 * @preview ![f](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/f.svg)
 */
const F: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M8 32L0 32l0 8L0 248 0 472l0 8 16 0 0-8 0-216 232 0 8 0 0-16-8 0L16 240 16 48l296 0 8 0 0-16-8 0L8 32z" />
    </Icon>
);

export default F;