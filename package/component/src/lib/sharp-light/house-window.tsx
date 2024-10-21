
import { Icon } from "../../index";

/**
 * A component that renders the `house-window` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-window?s=sharp-light house-window}
 * @preview ![house-window](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/house-window.svg)
 */
const HouseWindow: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M298.6 12L288 2.7 277.4 12 5.4 252l21.2 24L64 243l0 253 0 16 16 0 416 0 16 0 0-16 0-253 37.4 33 21.2-24L298.6 12zM96 480l0-265.3L288 45.3 480 214.7 480 480 96 480zM224 192l-16 0 0 16 0 128 0 16 16 0 128 0 16 0 0-16 0-128 0-16-16 0-128 0zm16 128l0-96 96 0 0 96-96 0z" />
    </Icon>
);

export default HouseWindow;