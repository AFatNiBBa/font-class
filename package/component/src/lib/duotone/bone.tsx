
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bone` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bone?s=duotone bone}
 * @preview ![bone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bone.svg)
 */
const Bone: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M153.7 144.8c6.9 16.3 20.6 31.2 38.3 31.2l192 0c17.7 0 31.4-14.9 38.3-31.2C434.4 116.1 462.9 96 496 96c44.2 0 80 35.8 80 80c0 30.4-17 56.9-42 70.4c-3.6 1.9-6 5.5-6 9.6s2.4 7.7 6 9.6c25 13.5 42 40 42 70.4c0 44.2-35.8 80-80 80c-33.1 0-61.6-20.1-73.7-48.8C415.4 350.9 401.7 336 384 336l-192 0c-17.7 0-31.4 14.9-38.3 31.2C141.6 395.9 113.1 416 80 416c-44.2 0-80-35.8-80-80c0-30.4 17-56.9 42-70.4c3.6-1.9 6-5.5 6-9.6s-2.4-7.7-6-9.6C17 232.9 0 206.4 0 176c0-44.2 35.8-80 80-80c33.1 0 61.6 20.1 73.7 48.8z" />
    </Icon>
);

export default Bone;