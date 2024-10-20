
import { Icon, generic } from "../../index";

/**
 * A component that renders the `h5` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h5?s=sharp-duotone-solid h5}
 * @preview ![h5](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/h5.svg)
 */
const H5: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 96 0 256 0 416l0 32 64 0 0-32 0-128 192 0 0 128 0 32 64 0 0-32 0-160 0-160 0-32-64 0 0 32 0 128L64 224 64 96l0-32L0 64z" />
        <path d="M403.2 64L432 64l144 0 32 0 0 64-32 0-115.2 0-9.3 88 72.5 0c64.1 0 116 51.9 116 116s-51.9 116-116 116l-64.3 0c-40.4 0-75.6-27.5-85.4-66.7L369 359.8 431 344.2l5.4 21.6c2.7 10.7 12.3 18.2 23.3 18.2l64.3 0c28.7 0 52-23.3 52-52s-23.3-52-52-52l-108 0-35.5 0 3.7-35.3 16-152 3-28.7z" />
    </Icon>
);

export default H5;