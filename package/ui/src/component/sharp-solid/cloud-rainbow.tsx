
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-rainbow` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-rainbow?s=sharp-solid cloud-rainbow}
 * @preview ![cloud-rainbow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cloud-rainbow.svg)
 */
const CloudRainbow: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M336.5 192l-.5 0c-19.7 0-38.3 5.1-54.4 14.1c-5.5-6-11.5-11.4-18-16.4C322.3 77 440.1 0 576 0l0 64c-99.9 0-187.8 50.8-239.5 128zM424 234.7c-13.4-16.9-31.5-29.9-52.3-36.9C418.4 136 492.5 96 576 96l0 64c-61.9 0-116.9 29.3-152 74.7zm23.4 57.2c-1-9.1-3.1-17.9-6.1-26.2C469.7 221.4 519.4 192 576 192l0 64c-38.3 0-71.4 22.5-86.8 55c-12.5-8.7-26.6-15.3-41.8-19.1zM96 512L0 512l0-96c0-41.8 26.7-77.4 64-90.5L64 304c0-61.9 50.1-112 112-112c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80l0 16c53 0 96 43 96 96l0 96-96 0L96 512z" />
    </Icon>
);

export default CloudRainbow;