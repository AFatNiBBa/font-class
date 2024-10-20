
import { Icon } from "../../index";

/**
 * A component that renders the `mobile` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile?s=sharp-regular mobile}
 * @preview ![mobile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/mobile.svg)
 */
const Mobile: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 48l0 416 256 0 0-416L64 48zM16 0L64 0 320 0l48 0 0 48 0 416 0 48-48 0L64 512l-48 0 0-48L16 48 16 0zM160 400l64 0 16 0 0 32-16 0-64 0-16 0 0-32 16 0z" />
    </Icon>
);

export default Mobile;