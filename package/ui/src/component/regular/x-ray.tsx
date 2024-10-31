
import { Icon } from "../../index";

/**
 * A component that renders the `x-ray` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/x-ray?s=regular x-ray}
 * @preview ![x-ray](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/x-ray.svg)
 */
const XRay: typeof Icon = x => (
    <Icon {...x}>
        <path d="M24 32C10.7 32 0 42.7 0 56S10.7 80 24 80l8 0 0 352-8 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 400 0 32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0-352 8 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-32 0L56 32 24 32zM80 432L80 80l352 0 0 352L80 432zM256 96c-8.8 0-16 7.2-16 16l0 32-64 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0 0 32-96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0 0 54.6L189.1 275c-5.2-2-10.6-3-16.2-3l-2.1 0c-23.6 0-42.8 19.2-42.8 42.8c0 9.6 3.2 18.9 9.1 26.4l18.2 23.2c9.7 12.4 24.6 19.6 40.3 19.6l120.8 0c15.7 0 30.6-7.2 40.3-19.6l18.2-23.2c5.9-7.5 9.1-16.8 9.1-26.4c0-23.6-19.2-42.8-42.8-42.8l-2.2 0c-5.5 0-11 1-16.2 3L272 294.6l0-54.6 96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0 0-32 64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0 0-32c0-8.8-7.2-16-16-16zM208 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm80 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default XRay;