
import { Icon } from "../../index";

/**
 * A component that renders the `volume-high` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume-high?s=sharp-light volume-high}
 * @preview ![volume-high](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/volume-high.svg)
 */
const VolumeHigh: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M608 256c0 83.8-40.2 158.1-102.4 204.8l19.2 25.6C594.7 433.9 640 350.3 640 256.1l0-.1 0-.1c0-94.2-45.3-177.8-115.2-230.3L505.6 51.2C567.8 97.9 608 172.2 608 256zM448 384l19.2 25.6c46.6-35 76.8-90.8 76.8-153.6s-30.2-118.6-76.8-153.6L448 128c38.9 29.2 64 75.7 64 128s-25.1 98.8-64 128zM416 256c0 20.9-10.1 39.5-25.6 51.2l19.2 25.6C432.9 315.3 448 287.4 448 256s-15.1-59.3-38.4-76.8l-19.2 25.6C405.9 216.5 416 235.1 416 256zM149.3 328.1l-9.1-8.1L128 320l-96 0 0-128 96 0 12.2 0 9.1-8.1L284.2 64l3.8 0 0 384-3.8 0L149.3 328.1zM0 352l32 0 96 0L272 480l16 0 32 0 0-32 0-384 0-32-32 0-16 0L128 160l-96 0L0 160l0 32L0 320l0 32z" />
    </Icon>
);

export default VolumeHigh;