
import { Icon } from "../../index";

/**
 * A component that renders the `couch` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/couch?s=sharp-light couch}
 * @preview ![couch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/couch.svg)
 */
const Couch: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M544 64L96 64l0 128-32 0L64 64l0-32 32 0 448 0 32 0 0 32 0 128-32 0 0-128zM32 448l64 0 0-32 0-96 0-32 0-32-64 0 0 192zm96-192l0 32 384 0 0-32 0-32 32 0 64 0 32 0 0 32 0 192 0 32-32 0-64 0-32 0 0-32-384 0 0 32-32 0-64 0L0 480l0-32L0 256l0-32 32 0 64 0 32 0 0 32zm0 160l384 0 0-96-384 0 0 96zm416 0l0 32 64 0 0-192-64 0 0 32 0 32 0 96z" />
    </Icon>
);

export default Couch;