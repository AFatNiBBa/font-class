
import { Icon, generic } from "../../index";

/**
 * A component that renders the `angles-up-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angles-up-down?s=sharp-duotone-solid angles-up-down}
 * @preview ![angles-up-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/angles-up-down.svg)
 */
const AnglesUpDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M19.2 358.4l25.6 19.2 160 120L224 512l19.2-14.4 160-120 25.6-19.2-38.4-51.2-25.6 19.2L224 432 83.2 326.4 57.6 307.2 19.2 358.4z" />
        <path d="M224 0l19.2 14.4 160 120 25.6 19.2-38.4 51.2-25.6-19.2L224 80 83.2 185.6 57.6 204.8 19.2 153.6l25.6-19.2 160-120L224 0z" />
    </Icon>
);

export default AnglesUpDown;