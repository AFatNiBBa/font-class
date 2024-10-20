
import { Icon } from "../../index";

/**
 * A component that renders the `e` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/e?s=sharp-thin e}
 * @preview ![e](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/e.svg)
 */
const E: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M8 32L0 32l0 8L0 256 0 472l0 8 8 0 304 0 8 0 0-16-8 0L16 464l0-208 232 0 8 0 0-16-8 0L16 240 16 48l296 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L8 32z" />
    </Icon>
);

export default E;