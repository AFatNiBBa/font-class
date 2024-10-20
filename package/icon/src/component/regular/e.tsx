
import { Icon } from "../../index";

/**
 * A component that renders the `e` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/e?s=regular e}
 * @preview ![e](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/e.svg)
 */
const E: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M56 32C25.1 32 0 57.1 0 88L0 256 0 424c0 30.9 25.1 56 56 56l240 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L56 432c-4.4 0-8-3.6-8-8l0-152 184 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L48 224 48 88c0-4.4 3.6-8 8-8l240 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L56 32z" />
    </Icon>
);

export default E;