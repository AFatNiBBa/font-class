
import { Icon } from "../../index";

/**
 * A component that renders the `l` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/l?s=sharp-light l}
 * @preview ![l](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/l.svg)
 */
const L: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M64 32l0 16 0 400 240 0 16 0 0 32-16 0L48 480l-16 0 0-16L32 48l0-16 32 0z" />
    </Icon>
);

export default L;