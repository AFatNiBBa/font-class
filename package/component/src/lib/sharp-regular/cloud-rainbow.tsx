
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-rainbow` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-rainbow?s=sharp-regular cloud-rainbow}
 * @preview ![cloud-rainbow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/cloud-rainbow.svg)
 */
const CloudRainbow: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M317.5 192C371.1 105.6 466.8 48 576 48l0-48C440.1 0 322.3 77 263.6 189.7c4.2 3.2 8.2 6.6 11.9 10.2c13.1-4.9 27.2-7.6 41.9-7.9zM409 228c37.9-51 98.6-84 167-84l0-48c-85.2 0-160.7 41.6-207.2 105.6c15.1 6.2 28.7 15.2 40.2 26.4zm35.8 63.2c10.8 2.5 21.1 6.3 30.7 11.4C493.7 265.5 531.9 240 576 240l0-48c-58.7 0-110 31.6-137.8 78.7c2.7 6.6 5 13.4 6.6 20.5zM368 320l0 48 48 0c26.5 0 48 21.5 48 48l0 48-48 0L96 464l-48 0 0-48c0-20.8 13.3-38.7 32-45.3l32-11.3 0-33.9 0-21.5c0-35.3 28.7-64 64-64c21.6 0 40.7 10.7 52.4 27.2l26.7 37.9 38.8-25.3c7.5-4.9 16.4-7.7 26.2-7.7c26.5 0 48 21.5 48 48zM0 512l48 0 48 0 320 0 48 0 48 0 0-48 0-48c0-53-43-96-96-96c0-53-43-96-96-96c-19.3 0-37.3 5.7-52.4 15.5C247.3 210.8 213.9 192 176 192c-61.9 0-112 50.1-112 112l0 21.5C26.7 338.6 0 374.2 0 416l0 48 0 48z" />
    </Icon>
);

export default CloudRainbow;