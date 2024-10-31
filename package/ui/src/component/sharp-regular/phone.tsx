
import { Icon } from "../../index";

/**
 * A component that renders the `phone` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone?s=sharp-regular phone}
 * @preview ![phone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/phone.svg)
 */
const Phone: typeof Icon = x => (
    <Icon {...x}>
        <path d="M304.3 387.5l-31.9-18.4c-53.8-31-98.6-75.8-129.6-129.6l-18.4-31.9 26-26 33.2-33.2L146 54.2 48.1 72c4.2 214.5 177.4 387.6 391.9 391.9L457.7 366l-94.2-37.7-33.2 33.2-26 26zM352 272l160 64L480 512l-32 0C200.6 512 0 311.4 0 64L0 32 176 0l64 160-55.6 55.6c26.8 46.5 65.5 85.2 112 112L352 272z" />
    </Icon>
);

export default Phone;