
import { Icon } from "../../index";

/**
 * A component that renders the `mobile` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile?s=sharp-thin mobile}
 * @preview ![mobile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/mobile.svg)
 */
const Mobile: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 16l0 480 288 0 0-480L48 16zM32 0L48 0 336 0l16 0 0 16 0 480 0 16-16 0L48 512l-16 0 0-16L32 16 32 0zM144 432l96 0 8 0 0 16-8 0-96 0-8 0 0-16 8 0z" />
    </Icon>
);

export default Mobile;