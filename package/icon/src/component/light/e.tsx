
import { Icon } from "../../index";

/**
 * A component that renders the `e` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/e?s=light e}
 * @preview ![e](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/e.svg)
 */
const E: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M48 32C21.5 32 0 53.5 0 80L0 256 0 432c0 26.5 21.5 48 48 48l256 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L48 448c-8.8 0-16-7.2-16-16l0-160 208 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L32 240 32 80c0-8.8 7.2-16 16-16l256 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L48 32z" />
    </Icon>
);

export default E;