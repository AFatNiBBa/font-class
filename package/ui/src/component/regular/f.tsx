
import { Icon } from "../../index";

/**
 * A component that renders the `f` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/f?s=regular f}
 * @preview ![f](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/f.svg)
 */
const F: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M56 32C25.1 32 0 57.1 0 88L0 248 0 456c0 13.3 10.7 24 24 24s24-10.7 24-24l0-184 184 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L48 224 48 88c0-4.4 3.6-8 8-8l240 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L56 32z" />
    </Icon>
);

export default F;