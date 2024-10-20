
import { Icon } from "../../index";

/**
 * A component that renders the `colon` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/colon?s=regular colon}
 * @preview ![colon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/colon.svg)
 */
const Colon: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M120 128a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm-96 0a72 72 0 1 1 144 0A72 72 0 1 1 24 128zm96 256a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm-96 0a72 72 0 1 1 144 0A72 72 0 1 1 24 384z" />
    </Icon>
);

export default Colon;