
import { Icon } from "../../index";

/**
 * A component that renders the `circle-info` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-info?s=thin circle-info}
 * @preview ![circle-info](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-info.svg)
 */
const CircleInfo: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 352c-4.4 0-8 3.6-8 8s3.6 8 8 8l96 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-40 0 0-136c0-4.4-3.6-8-8-8l-32 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l24 0 0 128-40 0zm48-176a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default CircleInfo;