
import { Icon } from "../../index";

/**
 * A component that renders the `yin-yang` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/yin-yang?s=sharp-thin yin-yang}
 * @preview ![yin-yang](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/yin-yang.svg)
 */
const YinYang: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256c0 132.5-107.5 240-240 240c-66.5 0-120-52.2-120-116s53.5-116 120-116c74.9 0 136-58.9 136-132c0-39.1-17.4-74.1-45.1-98.2C434.4 69.6 496 155.6 496 256zM256 16c66.5 0 120 52.2 120 116s-53.5 116-120 116c-74.9 0-136 58.9-136 132c0 39.1 17.4 74.1 45.1 98.2C77.6 442.4 16 356.4 16 256C16 123.5 123.5 16 256 16zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-179.3l-5.7 5.7-40 40-5.7 5.7 5.7 5.7 40 40 5.7 5.7 5.7-5.7 40-40 5.7-5.7-5.7-5.7-40-40-5.7-5.7zM227.3 384L256 355.3 284.7 384 256 412.7 227.3 384zM261.7 82.3L256 76.7l-5.7 5.7-40 40-5.7 5.7 5.7 5.7 40 40 5.7 5.7 5.7-5.7 40-40 5.7-5.7-5.7-5.7-40-40zM256 156.7L227.3 128 256 99.3 284.7 128 256 156.7z" />
    </Icon>
);

export default YinYang;