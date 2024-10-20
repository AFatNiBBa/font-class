
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-right` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-right?s=light arrow-down-right}
 * @preview ![arrow-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrow-down-right.svg)
 */
const ArrowDownRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M336 416c8.8 0 16-7.2 16-16l0-224c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 185.4L59.3 100.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L297.4 384 112 384c-8.8 0-16 7.2-16 16s7.2 16 16 16l224 0z" />
    </Icon>
);

export default ArrowDownRight;