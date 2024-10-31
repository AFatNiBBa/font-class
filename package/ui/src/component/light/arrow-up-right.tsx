
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-right` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-right?s=light arrow-up-right}
 * @preview ![arrow-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrow-up-right.svg)
 */
const ArrowUpRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M336 96c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-185.4L59.3 411.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L297.4 128 112 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l224 0z" />
    </Icon>
);

export default ArrowUpRight;