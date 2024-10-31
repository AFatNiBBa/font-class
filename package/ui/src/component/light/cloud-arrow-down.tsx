
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-arrow-down` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-arrow-down?s=light cloud-arrow-down}
 * @preview ![cloud-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/cloud-arrow-down.svg)
 */
const CloudArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M389.8 125.2C363.7 88.1 320.7 64 272 64c-77.4 0-140.5 61-143.9 137.5c-.6 13-9 24.4-21.3 28.8C63.2 245.7 32 287.2 32 336c0 61.9 50.1 112 112 112l368 0c53 0 96-43 96-96c0-36.8-20.7-68.8-51.2-84.9c-13.4-7.1-20-22.5-15.8-37.1c2-6.9 3-14.3 3-22c0-44.2-35.8-80-80-80c-12.3 0-23.9 2.8-34.3 7.7c-14.1 6.7-30.9 2.3-39.9-10.5zM272 32c59.5 0 112.1 29.5 144 74.8C430.5 99.9 446.8 96 464 96c61.9 0 112 50.1 112 112c0 10.7-1.5 21-4.3 30.8C612.3 260.2 640 302.9 640 352c0 70.7-57.3 128-128 128l-368 0C64.5 480 0 415.5 0 336c0-62.8 40.2-116.1 96.2-135.9C100.3 106.6 177.4 32 272 32zM228.7 299.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L304 329.4 304 176c0-8.8 7.2-16 16-16s16 7.2 16 16l0 153.4 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-80 80c-6.2 6.2-16.4 6.2-22.6 0l-80-80z" />
    </Icon>
);

export default CloudArrowDown;