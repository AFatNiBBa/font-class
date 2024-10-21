
import { Icon } from "../../index";

/**
 * A component that renders the `florin-sign` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/florin-sign?s=sharp-thin florin-sign}
 * @preview ![florin-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/florin-sign.svg)
 */
const FlorinSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M323 32c-29.3 0-55.6 17.7-66.7 44.8L189.9 240 32 240l0 16 151.4 0L112.8 429.1C104.2 450.2 83.7 464 61 464L8 464l-8 0 0 16 8 0 53 0c29.3 0 55.6-17.7 66.7-44.8l73-179.2L352 256l0-16-144.8 0 64-157.1C279.8 61.8 300.3 48 323 48l53 0 8 0 0-16-8 0-53 0z" />
    </Icon>
);

export default FlorinSign;