
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circles-overlap` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circles-overlap?s=sharp-duotone-solid circles-overlap}
 * @preview ![circles-overlap](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circles-overlap.svg)
 */
const CirclesOverlap: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 224C0 347.7 100.3 448 224 448c11.2 0 22.1-.8 32.8-2.4c40.6 41 96.9 66.4 159.2 66.4c123.7 0 224-100.3 224-224S539.7 64 416 64c-11.2 0-22.1 .8-32.8 2.4C342.6 25.4 286.3 0 224 0C100.3 0 0 100.3 0 224zm64 0c0-88.4 71.6-160 160-160c32.2 0 62.2 9.5 87.3 25.9c22-11.7 46.2-19.8 71.8-23.5c1.1 1.1 2.2 2.3 3.3 3.4s2.2 2.3 3.2 3.5c2.1 2.3 4.2 4.7 6.2 7.1c4.1 4.8 7.9 9.9 11.5 15c7.3 10.4 13.7 21.4 19.2 32.9C510 133.8 576 203.2 576 288c0 88.4-71.6 160-160 160c-32.2 0-62.2-9.5-87.3-25.9c-22.1 11.6-46.3 19.7-71.9 23.5c-1.1-1.1-2.2-2.2-3.3-3.4c-1.1-1.2-2.2-2.3-3.2-3.5c-2.1-2.3-4.2-4.7-6.2-7.1c-4.1-4.8-7.9-9.9-11.5-15c-7.3-10.4-13.7-21.4-19.2-32.9C130 378.2 64 308.8 64 224z" />
        <path d="M256.8 445.6C365 429.7 448 336.6 448 224c0-61.5-24.8-117.1-64.8-157.6C275 82.3 192 175.4 192 288c0 61.5 24.8 117.1 64.8 157.6z" />
    </Icon>
);

export default CirclesOverlap;