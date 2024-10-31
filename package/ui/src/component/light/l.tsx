
import { Icon } from "../../index";

/**
 * A component that renders the `l` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/l?s=light l}
 * @preview ![l](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/l.svg)
 */
const L: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M48 32c8.8 0 16 7.2 16 16l0 400 240 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L48 480c-8.8 0-16-7.2-16-16L32 48c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default L;