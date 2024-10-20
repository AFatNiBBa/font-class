
import { Icon } from "../../index";

/**
 * A component that renders the `l` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/l?s=regular l}
 * @preview ![l](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/l.svg)
 */
const L: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M56 32c13.3 0 24 10.7 24 24l0 376 216 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L56 480c-13.3 0-24-10.7-24-24L32 56c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default L;