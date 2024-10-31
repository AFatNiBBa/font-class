
import { Icon } from "../../index";

/**
 * A component that renders the `6` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/6?s=light 6}
 * @preview ![6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/6.svg)
 */
const $6: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M288 320c0-70.7-57.3-128-128-128C90.3 192 33.7 247.7 32 316.9c0 1 0 2 0 3.1c0 70.7 57.3 128 128 128s128-57.3 128-128zM126.8 163.5c10.7-2.3 21.8-3.5 33.2-3.5c88.4 0 160 71.6 160 160s-71.6 160-160 160S0 408.4 0 320c0-2 0-3.9 .1-5.9C1.5 276.2 16 239.9 41.2 211.5L196 37.4c5.9-6.6 16-7.2 22.6-1.3s7.2 16 1.3 22.6L126.8 163.5z" />
    </Icon>
);

export default $6;