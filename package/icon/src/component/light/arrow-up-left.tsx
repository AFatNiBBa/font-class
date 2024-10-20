
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-left` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-left?s=light arrow-up-left}
 * @preview ![arrow-up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrow-up-left.svg)
 */
const ArrowUpLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 96c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-185.4L324.7 411.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L86.6 128 272 128c8.8 0 16-7.2 16-16s-7.2-16-16-16L48 96z" />
    </Icon>
);

export default ArrowUpLeft;