
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-long` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-long?s=sharp-light arrow-down-long}
 * @preview ![arrow-down-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-down-long.svg)
 */
const ArrowDownLong: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M180.7 500.7L192 512l11.3-11.3 144-144 11.3-11.3L336 322.7l-11.3 11.3L208 450.7 208 16l0-16L176 0l0 16 0 434.7L59.3 334.1 48 322.7 25.4 345.4l11.3 11.3 144 144z" />
    </Icon>
);

export default ArrowDownLong;