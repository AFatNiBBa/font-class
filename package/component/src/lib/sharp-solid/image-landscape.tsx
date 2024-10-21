
import { Icon } from "../../index";

/**
 * A component that renders the `image-landscape` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-landscape?s=sharp-solid image-landscape}
 * @preview ![image-landscape](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/image-landscape.svg)
 */
const ImageLandscape: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 64L0 64 0 448l576 0 0-384zM128 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm200-16l19.2 25.6L484 384 80.8 384l12.8-15.4 80-96L192 250.5l18.4 22.1 23.7 28.5 74.6-99.5L328 176z" />
    </Icon>
);

export default ImageLandscape;