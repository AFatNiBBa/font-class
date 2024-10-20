
import { Icon, generic } from "../../index";

/**
 * A component that renders the `soft-serve` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/soft-serve?s=sharp-duotone-solid soft-serve}
 * @preview ![soft-serve](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/soft-serve.svg)
 */
const SoftServe: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M16 224l0 80 32 0 288 0 32 0 0-80c0-32.9-24.8-60-56.8-63.6c5.6-9.5 8.8-20.6 8.8-32.4C320 57.3 262.7 0 192 0l6.1 6.1c6.4 6.4 9.9 15 9.9 24C208 48.8 192.8 64 174.1 64L128 64c-35.3 0-64 28.7-64 64c0 11.8 3.2 22.9 8.8 32.4C40.8 164 16 191.1 16 224z" />
        <path d="M336 304L48 304l0 80 33.8 0L96 512l192 0 14.2-128 33.8 0 0-80z" />
    </Icon>
);

export default SoftServe;