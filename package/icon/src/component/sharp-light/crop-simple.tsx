
import { Icon } from "../../index";

/**
 * A component that renders the `crop-simple` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crop-simple?s=sharp-light crop-simple}
 * @preview ![crop-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/crop-simple.svg)
 */
const CropSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 16l0-16L96 0l0 16 0 80L16 96 0 96l0 32 16 0 80 0 0 272 0 16 16 0 240 0 0-32-224 0 0-368zM384 496l0 16 32 0 0-16 0-80 80 0 16 0 0-32-16 0-80 0 0-272 0-16-16 0L160 96l0 32 224 0 0 368z" />
    </Icon>
);

export default CropSimple;