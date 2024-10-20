
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-sankey` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-sankey?s=sharp-regular diagram-sankey}
 * @preview ![diagram-sankey](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/diagram-sankey.svg)
 */
const DiagramSankey: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M298.5 32L312 32l240 0 24 0 0 48-24 0L325.5 80l-81 132.5-7 11.5L224 224 24 224 0 224l0-48 24 0 186.5 0 81-132.5 7-11.5zM150.6 320L24 320 0 320l0-48 24 0 528 0 24 0 0 48-24 0-346.1 0 64 112L552 432l24 0 0 48-24 0-296 0-13.9 0-6.9-12.1L150.6 320z" />
    </Icon>
);

export default DiagramSankey;