
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diagram-sankey` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-sankey?s=sharp-duotone-solid diagram-sankey}
 * @preview ![diagram-sankey](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/diagram-sankey.svg)
 */
const DiagramSankey: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 256l0 64 32 0 109.9 0 86.7 144.5 9.3 15.5 18.1 0 288 0 32 0 0-64-32 0-269.9 0-57.6-96L544 320l32 0 0-64-32 0L32 256 0 256z" />
        <path d="M304 32l16 0 224 0 32 0 0 64-32 0L336 96 249.6 211.2 240 224l-16 0L32 224 0 224l0-64 32 0 176 0L294.4 44.8 304 32z" />
    </Icon>
);

export default DiagramSankey;