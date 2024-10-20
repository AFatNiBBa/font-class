
import { Icon } from "../../index";

/**
 * A component that renders the `l` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/l?s=thin l}
 * @preview ![l](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/l.svg)
 */
const L: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M40 32c4.4 0 8 3.6 8 8l0 424 264 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L48 480c-8.8 0-16-7.2-16-16L32 40c0-4.4 3.6-8 8-8z" />
    </Icon>
);

export default L;