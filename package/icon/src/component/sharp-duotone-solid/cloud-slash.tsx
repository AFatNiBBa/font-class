
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-slash?s=sharp-duotone-solid cloud-slash}
 * @preview ![cloud-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cloud-slash.svg)
 */
const CloudSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 336L0 480l144 0 343.4 0L97.2 172.6c-.8 6.4-1.2 12.9-1.2 19.4l0 8.2C40.1 220 0 273.3 0 336zM137.8 84.2C298.9 209.2 459.9 334.3 620.9 459.3c6.2 4.8 12.4 9.6 18.6 14.5c.1 0 .3 0 .4 .1c.1-40.7 .1-81.3 .1-121.9c0-59.6-40.8-109.8-96-124l0-36c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-46.8 0-89 20.1-118.2 52.2z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default CloudSlash;