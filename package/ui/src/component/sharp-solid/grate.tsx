
import { Icon } from "../../index";

/**
 * A component that renders the `grate` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grate?s=sharp-solid grate}
 * @preview ![grate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/grate.svg)
 */
const Grate: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 32L0 32 0 64 0 256 0 448l0 32 32 0 96 0 96 0 96 0 96 0 32 0 0-32 0-192 0-192 0-32-32 0-96 0-96 0-96 0L32 32zM64 224L64 96l32 0 0 128-32 0zm0 64l32 0 0 128-32 0 0-128zm96 128l0-128 32 0 0 128-32 0zm96 0l0-128 32 0 0 128-32 0zm96 0l0-128 32 0 0 128-32 0zm32-192l-32 0 0-128 32 0 0 128zM288 96l0 128-32 0 0-128 32 0zm-96 0l0 128-32 0 0-128 32 0z" />
    </Icon>
);

export default Grate;