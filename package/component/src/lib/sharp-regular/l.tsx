
import { Icon } from "../../index";

/**
 * A component that renders the `l` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/l?s=sharp-regular l}
 * @preview ![l](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/l.svg)
 */
const L: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M80 32l0 24 0 376 216 0 24 0 0 48-24 0L56 480l-24 0 0-24L32 56l0-24 48 0z" />
    </Icon>
);

export default L;