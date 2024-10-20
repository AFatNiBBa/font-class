
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-blank` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-blank?s=duotone house-blank}
 * @preview ![house-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/house-blank.svg)
 */
const HouseBlank: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 270.5c74.7-65.3 149.3-130.6 224-196L512.1 270.6l.4 177.3c.1 35.4-28.6 64.1-64 64.1l-320.4 0c-35.3 0-64-28.6-64-64L64 270.5z" />
        <path d="M266.9 7.9C279-2.6 297-2.6 309.1 7.9l256 224c13.3 11.6 14.6 31.9 3 45.2s-31.9 14.6-45.2 3L288 74.5 53.1 280.1c-13.3 11.6-33.5 10.3-45.2-3s-10.3-33.5 3-45.2l256-224z" />
    </Icon>
);

export default HouseBlank;