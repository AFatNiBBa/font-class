
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-left` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-left?s=light arrow-down-left}
 * @preview ![arrow-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrow-down-left.svg)
 */
const ArrowDownLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 416c-8.8 0-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16s16 7.2 16 16l0 185.4L324.7 100.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L86.6 384 272 384c8.8 0 16 7.2 16 16s-7.2 16-16 16L48 416z" />
    </Icon>
);

export default ArrowDownLeft;