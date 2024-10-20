
import { Icon } from "../../index";

/**
 * A component that renders the `crop-simple` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crop-simple?s=sharp-regular crop-simple}
 * @preview ![crop-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/crop-simple.svg)
 */
const CropSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 24l0-24L80 0l0 24 0 56L24 80 0 80l0 48 24 0 56 0 0 280 0 24 24 0 224 0 24 0 0-48-24 0-200 0 0-360zM384 488l0 24 48 0 0-24 0-56 56 0 24 0 0-48-24 0-56 0 0-280 0-24-24 0L160 80l0 48 224 0 0 360z" />
    </Icon>
);

export default CropSimple;