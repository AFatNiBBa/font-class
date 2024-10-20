
import { Icon } from "../../index";

/**
 * A component that renders the `f` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/f?s=sharp-light f}
 * @preview ![f](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/f.svg)
 */
const F: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M16 32L0 32 0 48 0 248 0 464l0 16 32 0 0-16 0-192 208 0 16 0 0-32-16 0L32 240 32 64l272 0 16 0 0-32-16 0L16 32z" />
    </Icon>
);

export default F;