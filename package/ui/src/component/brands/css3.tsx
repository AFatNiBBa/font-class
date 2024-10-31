
import { Icon } from "../../index";

/**
 * A component that renders the `css3` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/css3?s=brands css3}
 * @preview ![css3](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/css3.svg)
 */
const Css3: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z" />
    </Icon>
);

export default Css3;