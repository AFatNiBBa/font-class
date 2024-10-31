
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-moon` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-moon?s=sharp-duotone-solid cloud-moon}
 * @preview ![cloud-moon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cloud-moon.svg)
 */
const CloudMoon: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M320 192.2c0 11.4 1.1 22.6 3.2 33.4c51 8.8 90.3 52.1 92.7 105.1c16.3 7.7 30.4 19.2 41.2 33.4c12.4 2.8 25.4 4.3 38.7 4.3c56.6 0 106.9-26.8 139.1-68.4c-14.6 5-30.3 7.7-46.7 7.7c-79.5 0-144-64.5-144-144c0-66.5 45-122.4 106.2-139C533.2 19 514.8 16 495.8 16C398.7 16 320 94.9 320 192.2z" />
        <path d="M367.9 511.9l80 0 0-80c0-39.3-28.4-72.1-65.8-78.7c1.2-5.6 1.9-11.3 1.9-17.2c0-44.2-35.8-80-80-80c-17 0-32.8 5.3-45.8 14.4C241.3 242.6 210.8 224 176 224c-53 0-96 43-96 96l0 1.3c-45.4 7.6-80 47.1-80 94.6l0 96 96 0 271.9 0z" />
    </Icon>
);

export default CloudMoon;