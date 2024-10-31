
import { Icon } from "../../index";

/**
 * A component that renders the `phone` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone?s=sharp-light phone}
 * @preview ![phone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/phone.svg)
 */
const Phone: typeof Icon = x => (
    <Icon {...x}>
        <path d="M301.7 367.6l-21.3-12.3c-51.4-29.6-94.1-72.4-123.7-123.7l-12.3-21.3 17.3-17.3 40.7-40.7L156 36.2 32 58.7 32 64c0 229.7 186.3 416 416 416l5.3 0 22.5-124L359.7 309.5 319 350.2l-17.3 17.4zM352 272l160 64L480 512l-32 0C200.6 512 0 311.4 0 64L0 32 176 0l64 160-55.6 55.6c26.8 46.5 65.5 85.2 112 112L352 272z" />
    </Icon>
);

export default Phone;