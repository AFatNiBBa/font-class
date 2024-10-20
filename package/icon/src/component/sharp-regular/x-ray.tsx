
import { Icon } from "../../index";

/**
 * A component that renders the `x-ray` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/x-ray?s=sharp-regular x-ray}
 * @preview ![x-ray](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/x-ray.svg)
 */
const XRay: typeof Icon = x => (
    <Icon {...x}>
        <path d="M24 32L0 32 0 80l24 0 8 0 0 352-8 0L0 432l0 48 24 0 32 0 400 0 32 0 24 0 0-48-24 0-8 0 0-352 8 0 24 0 0-48-24 0-32 0L56 32 24 32zM80 432L80 80l352 0 0 352L80 432zM272 96l-32 0 0 16 0 32-64 0-16 0 0 32 16 0 64 0 0 32-96 0-16 0 0 32 16 0 96 0 0 54.6L181.3 272 128 272l0 57.6L170.7 384l170.7 0L384 329.6l0-57.6-53.3 0L272 294.6l0-54.6 96 0 16 0 0-32-16 0-96 0 0-32 64 0 16 0 0-32-16 0-64 0 0-32 0-16zM208 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm80 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default XRay;