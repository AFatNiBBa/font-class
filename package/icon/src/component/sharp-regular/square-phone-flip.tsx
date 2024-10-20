
import { Icon } from "../../index";

/**
 * A component that renders the `square-phone-flip` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-phone-flip?s=sharp-regular square-phone-flip}
 * @preview ![square-phone-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-phone-flip.svg)
 */
const SquarePhoneFlip: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 80l0 352L48 432 48 80l352 0zm48-48l-48 0L48 32 0 32 0 80 0 432l0 48 48 0 352 0 48 0 0-48 0-352 0-48zM280 128l-40 72 41.9 33.5c-18.1 34.2-46.2 62.3-80.4 80.4L168 272 96 312l16 72 16 0c123.7 0 224-100.3 224-224l0-16-72-16z" />
    </Icon>
);

export default SquarePhoneFlip;