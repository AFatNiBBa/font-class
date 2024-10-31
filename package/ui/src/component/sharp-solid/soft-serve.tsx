
import { Icon } from "../../index";

/**
 * A component that renders the `soft-serve` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/soft-serve?s=sharp-solid soft-serve}
 * @preview ![soft-serve](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/soft-serve.svg)
 */
const SoftServe: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M320 128c0 11.8-3.2 22.9-8.8 32.4c32 3.6 56.8 30.7 56.8 63.6l0 64L16 288l0-64c0-32.9 24.8-60 56.8-63.6C67.2 150.9 64 139.8 64 128c0-35.3 28.7-64 64-64l46.1 0C192.8 64 208 48.8 208 30.1c0-9-3.6-17.6-9.9-24L192 0c70.7 0 128 57.3 128 128zM48 384l0-64 288 0 0 64-33.8 0L288 512 96 512 81.8 384 48 384z" />
    </Icon>
);

export default SoftServe;