
import { Icon } from "../../index";

/**
 * A component that renders the `grate` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grate?s=sharp-regular grate}
 * @preview ![grate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/grate.svg)
 */
const Grate: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M24 32L0 32 0 56 0 256 0 456l0 24 24 0 104 0 96 0 96 0 104 0 24 0 0-24 0-200 0-200 0-24-24 0L320 32l-96 0-96 0L24 32zm80 48l0 152-56 0L48 80l56 0zM48 280l56 0 0 152-56 0 0-152zM152 432l0-152 48 0 0 152-48 0zm96 0l0-152 48 0 0 152-48 0zm96 0l0-152 56 0 0 152-56 0zm56-200l-56 0 0-152 56 0 0 152zM296 80l0 152-48 0 0-152 48 0zm-96 0l0 152-48 0 0-152 48 0z" />
    </Icon>
);

export default Grate;