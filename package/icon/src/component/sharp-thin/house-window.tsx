
import { Icon } from "../../index";

/**
 * A component that renders the `house-window` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-window?s=sharp-thin house-window}
 * @preview ![house-window](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/house-window.svg)
 */
const HouseWindow: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M293.2 9.9L288 5.5l-5.2 4.5-280 240 10.4 12.1L64 218.5 64 504l0 8 8 0 432 0 8 0 0-8 0-285.5 50.8 43.5 10.4-12.1-280-240zM80 496l0-291.2L288 26.5 496 204.8 496 496 80 496zM224 184l-8 0 0 8 0 128 0 8 8 0 128 0 8 0 0-8 0-128 0-8-8 0-128 0zm8 128l0-112 112 0 0 112-112 0z" />
    </Icon>
);

export default HouseWindow;