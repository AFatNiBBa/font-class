
import { Icon } from "../../index";

/**
 * A component that renders the `markdown` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/markdown?s=brands markdown}
 * @preview ![markdown](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/markdown.svg)
 */
const Markdown: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M593.8 59.1H46.2C20.7 59.1 0 79.8 0 105.2v301.5c0 25.5 20.7 46.2 46.2 46.2h547.7c25.5 0 46.2-20.7 46.1-46.1V105.2c0-25.4-20.7-46.1-46.2-46.1zM338.5 360.6H277v-120l-61.5 76.9-61.5-76.9v120H92.3V151.4h61.5l61.5 76.9 61.5-76.9h61.5v209.2zm135.3 3.1L381.5 256H443V151.4h61.5V256H566z" />
    </Icon>
);

export default Markdown;