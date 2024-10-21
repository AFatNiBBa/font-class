
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-sankey` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-sankey?s=sharp-thin diagram-sankey}
 * @preview ![diagram-sankey](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/diagram-sankey.svg)
 */
const DiagramSankey: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M331.3 32l4.7 0 232 0 8 0 0 16-8 0L340.7 48 247 219.8l-2.3 4.2-4.7 0L8 224l-8 0 0-16 8 0 227.3 0L329 36.2l2.3-4.2zM155.6 304L8 304l-8 0 0-16 8 0 560 0 8 0 0 16-8 0-393.4 0L276.4 464 568 464l8 0 0 16-8 0-296 0-4.4 0-2.4-3.7L155.6 304z" />
    </Icon>
);

export default DiagramSankey;