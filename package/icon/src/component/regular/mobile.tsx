
import { Icon } from "../../index";

/**
 * A component that renders the `mobile` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile?s=regular mobile}
 * @preview ![mobile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/mobile.svg)
 */
const Mobile: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M80 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l224 0c8.8 0 16-7.2 16-16l0-384c0-8.8-7.2-16-16-16L80 48zM16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM160 400l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default Mobile;