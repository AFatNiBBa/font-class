
import { Icon } from "../../index";

/**
 * A component that renders the `weight-scale` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/weight-scale?s=sharp-solid weight-scale}
 * @preview ![weight-scale](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/weight-scale.svg)
 */
const WeightScale: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 176a128 128 0 1 1 256 0 128 128 0 1 1 -256 0zM391.8 64C359.5 24.9 310.7 0 256 0S152.5 24.9 120.2 64L0 64 0 512l512 0 0-448L391.8 64zM296 224c0-10.6-4.1-20.2-10.9-27.4l33.6-78.3 6.3-14.7L295.6 91l-6.3 14.7L255.7 184c-22 .1-39.7 18-39.7 40c0 22.1 17.9 40 40 40s40-17.9 40-40z" />
    </Icon>
);

export default WeightScale;