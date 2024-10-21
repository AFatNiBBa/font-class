
import { Icon } from "../../index";

/**
 * A component that renders the `grate` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grate?s=solid grate}
 * @preview ![grate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/grate.svg)
 */
const Grate: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 32C28.7 32 0 60.7 0 96L0 256 0 416c0 35.3 28.7 64 64 64l64 0 96 0 96 0 64 0c35.3 0 64-28.7 64-64l0-160 0-160c0-35.3-28.7-64-64-64l-64 0-96 0-96 0L64 32zm0 64l32 0 0 128-32 0L64 96zm0 192l32 0 0 128-32 0 0-128zm96 128l0-128 32 0 0 128-32 0zm96 0l0-128 32 0 0 128-32 0zm96 0l0-128 32 0 0 128-32 0zm32-192l-32 0 0-128 32 0 0 128zM288 96l0 128-32 0 0-128 32 0zm-96 0l0 128-32 0 0-128 32 0z" />
    </Icon>
);

export default Grate;