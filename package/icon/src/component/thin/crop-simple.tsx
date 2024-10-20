
import { Icon } from "../../index";

/**
 * A component that renders the `crop-simple` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crop-simple?s=thin crop-simple}
 * @preview ![crop-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/crop-simple.svg)
 */
const CropSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 8c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 88L8 96c-4.4 0-8 3.6-8 8s3.6 8 8 8l88 0 0 264c0 22.1 17.9 40 40 40l216 0 0-16-216 0c-13.3 0-24-10.7-24-24L112 8zM400 504c0 4.4 3.6 8 8 8s8-3.6 8-8l0-88 88 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-88 0 0-264c0-22.1-17.9-40-40-40L160 96l0 16 216 0c13.3 0 24 10.7 24 24l0 368z" />
    </Icon>
);

export default CropSimple;