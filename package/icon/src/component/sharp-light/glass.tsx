
import { Icon } from "../../index";

/**
 * A component that renders the `glass` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/glass?s=sharp-light glass}
 * @preview ![glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/glass.svg)
 */
const Glass: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M42.1 128l299.8 0L314.4 480 69.6 480 42.1 128zM39.6 96l-5-64 314.8 0-5 64L39.6 96zM40 512l304 0L381.5 32 384 0 351.9 0 32.1 0 0 0 2.5 32 40 512z" />
    </Icon>
);

export default Glass;