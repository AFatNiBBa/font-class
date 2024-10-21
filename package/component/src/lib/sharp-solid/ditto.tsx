
import { Icon } from "../../index";

/**
 * A component that renders the `ditto` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ditto?s=sharp-solid ditto}
 * @preview ![ditto](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/ditto.svg)
 */
const Ditto: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M0 32L32 288l64 0L128 32 0 32zm192 0l32 256 64 0L320 32 192 32z" />
    </Icon>
);

export default Ditto;