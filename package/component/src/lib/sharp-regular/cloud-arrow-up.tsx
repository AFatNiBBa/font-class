
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-arrow-up` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-arrow-up?s=sharp-regular cloud-arrow-up}
 * @preview ![cloud-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/cloud-arrow-up.svg)
 */
const CloudArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 336c0-62.7 40.1-116 96-135.8l0-8.2c0-88.4 71.6-160 160-160c47.9 0 90.8 21 120.1 54.3C388.7 82.2 402.1 80 416 80c70.7 0 128 57.3 128 128l0 20c55.2 14.2 96 64.3 96 124l0 80 0 48-48 0-80 0-368 0-96 0L0 480l0-48 0-96zm592 16c0-37.2-25.4-68.6-60-77.5l-36-9.3 0-37.2 0-20c0-44.2-35.8-80-80-80c-8.8 0-17.1 1.4-24.9 3.9L361 141.8 340.1 118C319.5 94.6 289.5 80 256 80c-61.9 0-112 50.1-112 112l0 8.2 0 33.9-32 11.3C74.6 258.7 48 294.3 48 336l0 96 96 0 368 0 80 0 0-80zM223 255l80-80 17-17 17 17 80 80 17 17L400 305.9l-17-17-39-39L344 384l0 24-48 0 0-24 0-134.1-39 39-17 17L206.1 272l17-17z" />
    </Icon>
);

export default CloudArrowUp;