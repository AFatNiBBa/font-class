
import { Icon } from "../../index";

/**
 * A component that renders the `square-phone-flip` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-phone-flip?s=sharp-solid square-phone-flip}
 * @preview ![square-phone-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-phone-flip.svg)
 */
const SquarePhoneFlip: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l448 0 0 448L0 480 0 32zm280 96l-40 72 41.9 33.5c-18.1 34.2-46.2 62.3-80.4 80.4L168 272 96 312l16 72 16 0c123.7 0 224-100.3 224-224l0-16-72-16z" />
    </Icon>
);

export default SquarePhoneFlip;