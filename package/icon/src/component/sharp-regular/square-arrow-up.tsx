
import { Icon } from "../../index";

/**
 * A component that renders the `square-arrow-up` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-up?s=sharp-regular square-arrow-up}
 * @preview ![square-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-arrow-up.svg)
 */
const SquareArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zm241 87l88 88 17 17L312 257.9l-17-17-47-47L248 376l0 24-48 0 0-24 0-182.1-47 47-17 17L102.1 224l17-17 88-88 17-17 17 17z" />
    </Icon>
);

export default SquareArrowUp;