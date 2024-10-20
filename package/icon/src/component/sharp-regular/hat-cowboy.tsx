
import { Icon } from "../../index";

/**
 * A component that renders the `hat-cowboy` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hat-cowboy?s=sharp-regular hat-cowboy}
 * @preview ![hat-cowboy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/hat-cowboy.svg)
 */
const HatCowboy: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 80L260.1 52.4 216 32 202.8 78.8 151.7 260.6c13.9 5 29.2 9.6 46 13.6L247 99.2l52.9 24.4 20.1 9.3 20.1-9.3L393 99.2l49.2 175.1c16.8-4 32.1-8.7 46-13.6L437.2 78.8 424 32 379.9 52.4 320 80zM24 224L0 256s96 192 320 192s320-192 320-192l-24-32s-94.5 96-296 96s-296-96-296-96z" />
    </Icon>
);

export default HatCowboy;