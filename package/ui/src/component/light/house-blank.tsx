
import { Icon } from "../../index";

/**
 * A component that renders the `house-blank` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-blank?s=light house-blank}
 * @preview ![house-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/house-blank.svg)
 */
const HouseBlank: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M277.4 4c6-5.3 15.1-5.3 21.2 0l272 240c6.6 5.8 7.3 16 1.4 22.6s-16 7.3-22.6 1.4L512 235l0 197c0 44.2-35.8 80-80 80l-288 0c-44.2 0-80-35.8-80-80l0-197L26.6 268C20 273.8 9.8 273.2 4 266.6S-1.2 249.8 5.4 244L277.4 4zM96 206.7L96 432c0 26.5 21.5 48 48 48l288 0c26.5 0 48-21.5 48-48l0-225.3L288 37.3 96 206.7z" />
    </Icon>
);

export default HouseBlank;