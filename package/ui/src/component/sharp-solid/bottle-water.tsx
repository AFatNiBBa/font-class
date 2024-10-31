
import { Icon } from "../../index";

/**
 * A component that renders the `bottle-water` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bottle-water?s=sharp-solid bottle-water}
 * @preview ![bottle-water](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bottle-water.svg)
 */
const BottleWater: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M96 0l0 64 128 0 0-64L96 0zM58.6 119.6C42 129.9 32 148 32 167.5c0 17 7.5 32.3 19.4 42.6C39.4 221.7 32 238 32 256c0 19.1 8.4 36.3 21.7 48C40.4 315.7 32 332.9 32 352s8.4 36.3 21.7 48C40.4 411.7 32 428.9 32 448l0 64 64 0 128 0 64 0 0-64c0-19.1-8.4-36.3-21.7-48c13.3-11.7 21.7-28.9 21.7-48s-8.4-36.3-21.7-48c13.3-11.7 21.7-28.9 21.7-48c0-18-7.4-34.3-19.4-45.9c11.9-10.4 19.4-25.6 19.4-42.6c0-19.5-10-37.6-26.6-47.9L223.7 96 96.3 96 58.6 119.6zM96 224l128 0 0 32L96 256l0-32zM224 352l0 32L96 384l0-32 128 0z" />
    </Icon>
);

export default BottleWater;