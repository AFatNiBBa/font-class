
import { Icon } from "../../index";

/**
 * A component that renders the `yin-yang` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/yin-yang?s=regular yin-yang}
 * @preview ![yin-yang](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/yin-yang.svg)
 */
const YinYang: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256c0 114.9-93.1 208-208 208c-50.9 0-92.2-41.2-92.2-92s41.3-92 92.2-92c77.3 0 140-62.7 140-140c0-15.4-2.5-30.1-7-44c45.9 38.2 75 95.7 75 160zM256 48c50.8 0 92 41.2 92 92s-41.2 92-92 92c-77.3 0-140.2 62.6-140.2 140c0 15.3 2.5 30 7 43.8C77.1 377.6 48 320.2 48 256C48 141.1 141.1 48 256 48zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm32-368a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default YinYang;