
import { Icon } from "../../index";

/**
 * A component that renders the `house-window` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-window?s=light house-window}
 * @preview ![house-window](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/house-window.svg)
 */
const HouseWindow: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M298.6 4c-6-5.3-15.1-5.3-21.2 0L5.4 244c-6.6 5.8-7.3 16-1.4 22.6s16 7.3 22.6 1.4L64 235l0 197c0 44.2 35.8 80 80 80l288 0c44.2 0 80-35.8 80-80l0-197 37.4 33c6.6 5.8 16.7 5.2 22.6-1.4s5.2-16.7-1.4-22.6L298.6 4zM96 432l0-225.3L288 37.3 480 206.7 480 432c0 26.5-21.5 48-48 48l-288 0c-26.5 0-48-21.5-48-48zM240 192c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zm0 32l96 0 0 96-96 0 0-96z" />
    </Icon>
);

export default HouseWindow;