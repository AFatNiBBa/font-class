
import { Icon } from "../../index";

/**
 * A component that renders the `hat-cowboy` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hat-cowboy?s=sharp-solid hat-cowboy}
 * @preview ![hat-cowboy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hat-cowboy.svg)
 */
const HatCowboy: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 80L216 32 151.7 260.6c42.4 15.2 98.1 27.3 167.9 27.4l.8 0c69.8 0 125.5-12.2 167.9-27.4L424 32 320 80zM24 224L0 256s96 192 320 192s320-192 320-192l-24-32s-94.5 96-296 96s-296-96-296-96z" />
    </Icon>
);

export default HatCowboy;