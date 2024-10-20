
import { Icon } from "../../index";

/**
 * A component that renders the `colon` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/colon?s=light colon}
 * @preview ![colon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/colon.svg)
 */
const Colon: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M128 128a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-96 0a64 64 0 1 1 128 0A64 64 0 1 1 32 128zm96 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-96 0a64 64 0 1 1 128 0A64 64 0 1 1 32 384z" />
    </Icon>
);

export default Colon;