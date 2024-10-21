
import { Icon, generic } from "../../index";

/**
 * A component that renders the `yin-yang` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/yin-yang?s=duotone yin-yang}
 * @preview ![yin-yang](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/yin-yang.svg)
 */
const YinYang: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 384c0 70.7 57.3 128 128 128c141.4 0 256-114.6 256-256C512 115.9 399.4 2 259.8 0C328.7 2.1 384 58.6 384 128c0 70.7-57.3 128-128 128s-128 57.3-128 128zm96-256a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm64 256a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M0 256C0 114.6 114.6 0 256 0c70.7 0 128 57.3 128 128s-57.3 128-128 128s-128 57.3-128 128s57.3 128 128 128C114.6 512 0 397.4 0 256zM288 384a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM256 96a32 32 0 1 0 0 64 32 32 0 1 0 0-64z" />
    </Icon>
);

export default YinYang;