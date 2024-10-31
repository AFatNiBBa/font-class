
import { Icon } from "../../index";

/**
 * A component that renders the `f` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/f?s=thin f}
 * @preview ![f](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/f.svg)
 */
const F: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M32 32C14.3 32 0 46.3 0 64L0 248 0 472c0 4.4 3.6 8 8 8s8-3.6 8-8l0-216 232 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L16 240 16 64c0-8.8 7.2-16 16-16l280 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L32 32z" />
    </Icon>
);

export default F;