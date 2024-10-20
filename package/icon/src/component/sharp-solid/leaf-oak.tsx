
import { Icon } from "../../index";

/**
 * A component that renders the `leaf-oak` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/leaf-oak?s=sharp-solid leaf-oak}
 * @preview ![leaf-oak](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/leaf-oak.svg)
 */
const LeafOak: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 248l0-72-48-32 16-64L432 32 368 48 336 0 264 0 240 96 176 32 128 80l16 112L96 160 32 224l48 96 0 65.4L229.6 235.8l11.3-11.3 22.3 22.3L55 455l-17 17L72 505.9l17-17 57-57 46.1 0 96 48 64-64-32-48 112 16 48-48-64-64 96-24z" />
    </Icon>
);

export default LeafOak;