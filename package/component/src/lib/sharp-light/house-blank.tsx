
import { Icon } from "../../index";

/**
 * A component that renders the `house-blank` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-blank?s=sharp-light house-blank}
 * @preview ![house-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/house-blank.svg)
 */
const HouseBlank: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 2.7L298.6 12l272 240-21.2 24L512 243l0 253 0 16-16 0L80 512l-16 0 0-16 0-253L26.6 276 5.4 252l272-240L288 2.7zM96 214.7L96 480l384 0 0-265.3L288 45.3 96 214.7z" />
    </Icon>
);

export default HouseBlank;