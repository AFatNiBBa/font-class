
import { Icon } from "../../index";

/**
 * A component that renders the `f` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/f?s=light f}
 * @preview ![f](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/f.svg)
 */
const F: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M48 32C21.5 32 0 53.5 0 80L0 248 0 464c0 8.8 7.2 16 16 16s16-7.2 16-16l0-192 208 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L32 240 32 80c0-8.8 7.2-16 16-16l256 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L48 32z" />
    </Icon>
);

export default F;