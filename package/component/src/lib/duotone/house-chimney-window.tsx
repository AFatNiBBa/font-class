
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-chimney-window` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-chimney-window?s=duotone house-chimney-window}
 * @preview ![house-chimney-window](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/house-chimney-window.svg)
 */
const HouseChimneyWindow: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 270.5L64.1 448c0 35.3 28.7 64 64 64l320.4 0c35.4 0 64-28.7 64-64c-.1-59.2-.3-118.3-.4-177.4L288 74.5 64 270.5zM224 264c0-13.3 10.7-24 24-24l80 0c13.3 0 24 10.7 24 24l0 80c0 13.3-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24l0-80z" />
        <path d="M309.1 7.9C297-2.6 279-2.6 266.9 7.9l-256 224c-13.3 11.6-14.6 31.9-3 45.2s31.9 14.6 45.2 3L288 74.5 522.9 280.1c13.3 11.6 33.5 10.3 45.2-3s10.3-33.5-3-45.2L512 185.5 512 64c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32l0 37.5L309.1 7.9z" />
    </Icon>
);

export default HouseChimneyWindow;