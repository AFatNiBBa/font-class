
import { Icon } from "../../index";

/**
 * A component that renders the `info` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/info?s=sharp-light info}
 * @preview ![info](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/info.svg)
 */
const Info: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M128 32l0 64L64 96l0-64 64 0zM16 160l16 0 64 0 16 0 0 16 0 272 64 0 16 0 0 32-16 0L16 480 0 480l0-32 16 0 64 0 0-256-48 0-16 0 0-32z" />
    </Icon>
);

export default Info;