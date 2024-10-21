
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-arrow-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-arrow-up?s=sharp-duotone-solid cloud-arrow-up}
 * @preview ![cloud-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cloud-arrow-up.svg)
 */
const CloudArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 336L0 480l144 0 368 0 128 0 0-128c0-59.6-40.8-109.8-96-124l0-36c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192l0 8.2C40.1 220 0 273.3 0 336zm206.1-56l17-17 80-80 17-17 17 17 80 80 17 17L400 313.9l-17-17-39-39L344 392l0 24-48 0 0-24 0-134.1-39 39-17 17L206.1 280z" />
        <path d="M206.1 280l17-17 80-80 17-17 17 17 80 80 17 17L400 313.9l-17-17-39-39L344 392l0 24-48 0 0-24 0-134.1-39 39-17 17L206.1 280z" />
    </Icon>
);

export default CloudArrowUp;