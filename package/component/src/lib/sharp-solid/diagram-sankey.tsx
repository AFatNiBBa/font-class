
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-sankey` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-sankey?s=sharp-solid diagram-sankey}
 * @preview ![diagram-sankey](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/diagram-sankey.svg)
 */
const DiagramSankey: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M304 32l16 0 224 0 32 0 0 64-32 0L336 96 249.6 211.2 240 224l-16 0L32 224 0 224l0-64 32 0 176 0L294.4 44.8 304 32zM141.9 320L32 320 0 320l0-64 32 0 512 0 32 0 0 64-32 0-327.5 0 57.6 96L544 416l32 0 0 64-32 0-288 0-18.1 0-9.3-15.5L141.9 320z" />
    </Icon>
);

export default DiagramSankey;