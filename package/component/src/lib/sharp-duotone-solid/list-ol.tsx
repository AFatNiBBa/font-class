
import { Icon, generic } from "../../index";

/**
 * A component that renders the `list-ol` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-ol?s=sharp-duotone-solid list-ol}
 * @preview ![list-ol](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/list-ol.svg)
 */
const ListOl: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 64l32 0 256 0 32 0 0 64-32 0-256 0-32 0 0-64zm0 160l32 0 264 0 32 0 0 64-32 0-264 0-32 0 0-64zm0 160l32 0 256 0 32 0 0 64-32 0-256 0-32 0 0-64z" />
        <path d="M56 32L32 32l0 48 24 0 0 96-8 0-24 0 0 48 24 0 8 0 48 0 8 0 24 0 0-48-24 0-8 0 0-120 0-24L80 32 56 32zM72 288c-35.3 0-64 28.7-64 64l48 0c0-8.8 7.2-16 16-16l17.2 0c8.2 0 14.8 6.6 14.8 14.8c0 4.2-1.8 8.2-4.8 11L15.8 437.7 8 444.8l0 10.6 0 .6 0 24 24 0 96 0 24 0 0-48-24 0-34.6 0 38.1-34.7c13.1-11.9 20.5-28.8 20.5-46.5c0-34.7-28.1-62.8-62.8-62.8L72 288z" />
    </Icon>
);

export default ListOl;