
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fireplace` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fireplace?s=sharp-duotone-solid fireplace}
 * @preview ![fireplace](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/fireplace.svg)
 */
const Fireplace: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 96l32 0 576 0 32 0 0-96L0 0zM207.9 400c0 61.9 50.1 112 112 112s112-50.1 112-112c0-18.7-13.4-67.2-67.2-112l-22.4 22.4-44.8-44.8c-29.9 18.7-89.6 71.7-89.6 134.4zm67.2 33.7c0-33.6 44.8-67.2 44.8-67.2s44.8 33.6 44.8 67.2c0 24.7-20.1 44.8-44.8 44.8s-44.8-20.1-44.8-44.8z" />
        <path d="M608 96L32 96l0 416 128 0 0-160c0-88.4 71.6-160 160-160s160 71.6 160 160l0 160 128 0 0-416z" />
    </Icon>
);

export default Fireplace;