
import { Icon } from "../../index";

/**
 * A component that renders the `hammer` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hammer?s=sharp-regular hammer}
 * @preview ![hammer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/hammer.svg)
 */
const Hammer: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M504 136l-33.9-33.9L405.5 37.5C381.5 13.5 348.9 0 315 0L291.5 0c-23.2 0-46 6.3-65.9 18.2l-.8 .5L176 48l50.9 25.4L272 96l0 48 78.1 78.1L384 256l16-16 33.9 33.9 4.1 4.1 1 1-4.8 4.8-17 17 33.9 33.9 17-17 89.6-89.6 17-17-33.9-33.9L527 191l-1-1-4.1-4.1L488 152l16-16zm-67.9 0l-16 16 33.9 33.9L492.1 224 472 244.1l-38.1-38.1L400 172.1l-16 16-64-64L320 96l0-29.7L293.5 53.1 284 48.3c2.5-.2 4.9-.3 7.4-.3L315 48c21.2 0 41.6 8.4 56.6 23.4L436.1 136zM264 181.3L0 416l96 96L330.7 248 264 181.3z" />
    </Icon>
);

export default Hammer;