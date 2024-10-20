
import { Icon } from "../../index";

/**
 * A component that renders the `yin-yang` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/yin-yang?s=sharp-light yin-yang}
 * @preview ![yin-yang](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/yin-yang.svg)
 */
const YinYang: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256c0 123.7-100.3 224-224 224c-57.4 0-104-46.6-104-104s46.6-104 104-104c75.1 0 136-60.9 136-136c0-26.5-7.6-51.2-20.6-72C436.5 103.1 480 174.5 480 256zM256 32c57.4 0 104 46.6 104 104s-46.6 104-104 104c-75.1 0-136 60.9-136 136c0 26.5 7.6 51.2 20.6 72C75.5 408.9 32 337.5 32 256C32 132.3 132.3 32 256 32zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM224 376l32 32 32-32-32-32-32 32zm32-272l-32 32 32 32 32-32-32-32z" />
    </Icon>
);

export default YinYang;