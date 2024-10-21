
import { Icon, generic } from "../../index";

/**
 * A component that renders the `yin-yang` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/yin-yang?s=sharp-duotone-solid yin-yang}
 * @preview ![yin-yang](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/yin-yang.svg)
 */
const YinYang: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 384c0 70.7 57.3 128 128 128c141.4 0 256-114.6 256-256C512 115.9 399.4 2 259.8 0C328.7 2.1 384 58.6 384 128c0 70.7-57.3 128-128 128s-128 57.3-128 128zm88-256l40 40 40-40L256 88l-40 40zm0 256l40-40 40 40-40 40-40-40z" />
        <path d="M0 256C0 114.6 114.6 0 256 0c70.7 0 128 57.3 128 128s-57.3 128-128 128s-128 57.3-128 128s57.3 128 128 128C114.6 512 0 397.4 0 256zM216 384l40-40 40 40-40 40-40-40zM256 88l-40 40 40 40 40-40L256 88z" />
    </Icon>
);

export default YinYang;