
import { Icon } from "../../index";

/**
 * A component that renders the `house-window` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-window?s=sharp-solid house-window}
 * @preview ![house-window](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/house-window.svg)
 */
const HouseWindow: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M511.8 287.6l64.2 0 0-47.6L288.4 0 0 240l0 47.6 64.1 0 0 224.4 448.7 0-1-224.4zM352 192l0 128-128 0 0-128 128 0z" />
    </Icon>
);

export default HouseWindow;