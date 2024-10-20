
import { Icon } from "../../index";

/**
 * A component that renders the `e` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/e?s=sharp-light e}
 * @preview ![e](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/e.svg)
 */
const E: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M16 32L0 32 0 48 0 256 0 464l0 16 16 0 288 0 16 0 0-32-16 0L32 448l0-176 208 0 16 0 0-32-16 0L32 240 32 64l272 0 16 0 0-32-16 0L16 32z" />
    </Icon>
);

export default E;