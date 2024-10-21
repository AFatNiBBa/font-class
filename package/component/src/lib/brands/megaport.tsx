
import { Icon } from "../../index";

/**
 * A component that renders the `megaport` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/megaport?s=brands megaport}
 * @preview ![megaport](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/megaport.svg)
 */
const Megaport: typeof Icon = x => (
    <Icon viewBox="0 0 496 512" {...x}>
        <path d="M214.5 209.6v66.2l33.5 33.5 33.3-33.3v-66.4l-33.4-33.4zM248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm145.1 414.4L367 441.6l-26-19.2v-65.5l-33.4-33.4-33.4 33.4v65.5L248 441.6l-26.1-19.2v-65.5l-33.4-33.4-33.5 33.4v65.5l-26.1 19.2-26.1-19.2v-87l59.5-59.5V188l59.5-59.5V52.9l26.1-19.2L274 52.9v75.6l59.5 59.5v87.6l59.7 59.7v87.1z" />
    </Icon>
);

export default Megaport;