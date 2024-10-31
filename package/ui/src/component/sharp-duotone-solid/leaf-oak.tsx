
import { Icon, generic } from "../../index";

/**
 * A component that renders the `leaf-oak` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/leaf-oak?s=sharp-duotone-solid leaf-oak}
 * @preview ![leaf-oak](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/leaf-oak.svg)
 */
const LeafOak: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 224l48 96 0 78.1L279.9 198.1c5.7-5.7 11.3-11.3 17-17c11.3 11.3 22.6 22.6 33.9 33.9c-5.7 5.7-11.3 11.3-17 17C247.2 298.7 180.6 365.4 113.9 432l78.1 0 96 48 64-64-32-48 112 16 48-48-64-64 96-24 0-72-48-32 16-64L432 32 368 48 336 0 264 0 240 96 176 32 128 80l16 112L96 160 32 224z" />
        <path d="M6.1 472l17-17L279.9 198.1l17-17 33.9 33.9-17 17L57 489l-17 17L6.1 472z" />
    </Icon>
);

export default LeafOak;