
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diagram-sankey` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-sankey?s=duotone diagram-sankey}
 * @preview ![diagram-sankey](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/diagram-sankey.svg)
 */
const DiagramSankey: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 288c0 17.7 14.3 32 32 32l109.9 0 86.7 144.5c5.8 9.6 16.2 15.5 27.4 15.5l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-269.9 0-57.6-96L544 320c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 256c-17.7 0-32 14.3-32 32z" />
        <path d="M294.4 44.8c6-8.1 15.5-12.8 25.6-12.8l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L336 96 249.6 211.2c-6 8.1-15.5 12.8-25.6 12.8L32 224c-17.7 0-32-14.3-32-32s14.3-32 32-32l176 0L294.4 44.8z" />
    </Icon>
);

export default DiagramSankey;