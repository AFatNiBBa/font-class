
import { Icon } from "../../index";

/**
 * A component that renders the `square-phone` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-phone?s=sharp-solid square-phone}
 * @preview ![square-phone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-phone.svg)
 */
const SquarePhone: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM168 128l40 72-41.9 33.5c18.1 34.2 46.2 62.3 80.4 80.4L280 272l72 40-16 72-16 0C196.3 384 96 283.7 96 160l0-16 72-16z" />
    </Icon>
);

export default SquarePhone;