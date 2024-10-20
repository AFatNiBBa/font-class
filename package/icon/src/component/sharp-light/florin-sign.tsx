
import { Icon } from "../../index";

/**
 * A component that renders the `florin-sign` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/florin-sign?s=sharp-light florin-sign}
 * @preview ![florin-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/florin-sign.svg)
 */
const FlorinSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M322.4 32c-32.1 0-61.2 19.2-73.7 48.8L188.2 224 32 224l0 32 142.6 0L105.8 418.7C98.3 436.5 80.9 448 61.6 448L16 448 0 448l0 32 16 0 45.6 0c32.1 0 61.2-19.2 73.7-48.8L209.4 256 352 256l0-32-129.1 0L278.2 93.3C285.7 75.5 303.1 64 322.4 64L368 64l16 0 0-32-16 0-45.6 0z" />
    </Icon>
);

export default FlorinSign;