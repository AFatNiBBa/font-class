
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down?s=light arrow-down}
 * @preview ![arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrow-down.svg)
 */
const ArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M180.7 475.3c6.2 6.2 16.4 6.2 22.6 0l176-176c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L208 425.4 208 48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 377.4L27.3 276.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l176 176z" />
    </Icon>
);

export default ArrowDown;