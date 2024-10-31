
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-chimney-blank` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-chimney-blank?s=duotone house-chimney-blank}
 * @preview ![house-chimney-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/house-chimney-blank.svg)
 */
const HouseChimneyBlank: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 270.5c74.7-65.3 149.3-130.7 224-196L512.1 270.6l.4 177.3c.1 35.4-28.6 64.1-64 64.1l-320.4 0c-35.3 0-64-28.6-64-64L64 270.5z" />
        <path d="M309.1 7.9C297-2.6 279-2.6 266.9 7.9l-256 224c-13.3 11.6-14.6 31.9-3 45.2s31.9 14.6 45.2 3L288 74.5 522.9 280.1c13.3 11.6 33.5 10.3 45.2-3s10.3-33.5-3-45.2L512 185.5 512 64c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32l0 37.5L309.1 7.9z" />
    </Icon>
);

export default HouseChimneyBlank;