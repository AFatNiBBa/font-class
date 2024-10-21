
import { Icon } from "../../index";

/**
 * A component that renders the `crop` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crop?s=thin crop}
 * @preview ![crop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/crop.svg)
 */
const Crop: typeof Icon = x => (
    <Icon {...x}>
        <path d="M416 107.3l93.7-93.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L404.7 96 160 96c-4.4 0-8 3.6-8 8s3.6 8 8 8l228.7 0L112 388.7 112 8c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 88L8 96c-4.4 0-8 3.6-8 8s3.6 8 8 8l88 0 0 280c0 13.3 10.7 24 24 24l232 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-228.7 0L400 123.3 400 504c0 4.4 3.6 8 8 8s8-3.6 8-8l0-88 88 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-88 0 0-292.7z" />
    </Icon>
);

export default Crop;