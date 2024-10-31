
import { Icon, generic } from "../../index";

/**
 * A component that renders the `box-open` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-open?s=sharp-duotone-solid box-open}
 * @preview ![box-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/box-open.svg)
 */
const BoxOpen: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 160L64 32 320 64 224 224 64 178.3C42.7 172.2 21.3 166.1 0 160zM320 64L576 32l64 128c-21.3 6.1-42.7 12.2-64 18.3c-53.3 15.2-106.7 30.5-160 45.7L320 64z" />
        <path d="M320 64L224 224 64 178.3 64 416l256 64 256-64 0-237.7L416 224 320 64z" />
    </Icon>
);

export default BoxOpen;