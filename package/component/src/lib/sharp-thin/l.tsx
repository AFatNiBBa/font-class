
import { Icon } from "../../index";

/**
 * A component that renders the `l` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/l?s=sharp-thin l}
 * @preview ![l](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/l.svg)
 */
const L: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M48 32l0 8 0 424 264 0 8 0 0 16-8 0L40 480l-8 0 0-8L32 40l0-8 16 0z" />
    </Icon>
);

export default L;