
import { Icon } from "../../index";

/**
 * A component that renders the `yin-yang` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/yin-yang?s=solid yin-yang}
 * @preview ![yin-yang](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/yin-yang.svg)
 */
const YinYang: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 64c53 0 96 43 96 96s-43 96-96 96s-96 43-96 96s43 96 96 96C150 448 64 362 64 256S150 64 256 64zm0 448A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm32-352a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default YinYang;