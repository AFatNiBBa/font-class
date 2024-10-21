
import { Icon } from "../../index";

/**
 * A component that renders the `e` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/e?s=thin e}
 * @preview ![e](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/e.svg)
 */
const E: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M32 32C14.3 32 0 46.3 0 64L0 256 0 448c0 17.7 14.3 32 32 32l280 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L32 464c-8.8 0-16-7.2-16-16l0-192 232 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L16 240 16 64c0-8.8 7.2-16 16-16l280 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L32 32z" />
    </Icon>
);

export default E;