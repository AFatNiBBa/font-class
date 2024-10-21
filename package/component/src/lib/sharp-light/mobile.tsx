
import { Icon } from "../../index";

/**
 * A component that renders the `mobile` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile?s=sharp-light mobile}
 * @preview ![mobile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/mobile.svg)
 */
const Mobile: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 32l0 448 256 0 0-448L64 32zM32 0L64 0 320 0l32 0 0 32 0 448 0 32-32 0L64 512l-32 0 0-32L32 32 32 0zM160 400l64 0 16 0 0 32-16 0-64 0-16 0 0-32 16 0z" />
    </Icon>
);

export default Mobile;