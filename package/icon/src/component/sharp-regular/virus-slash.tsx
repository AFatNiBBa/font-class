
import { Icon } from "../../index";

/**
 * A component that renders the `virus-slash` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/virus-slash?s=sharp-regular virus-slash}
 * @preview ![virus-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/virus-slash.svg)
 */
const VirusSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48.4 14.8L29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7L48.4 14.8z" />
    </Icon>
);

export default VirusSlash;