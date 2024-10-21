
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-slash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-slash?s=sharp-thin cloud-slash}
 * @preview ![cloud-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/cloud-slash.svg)
 */
const CloudSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16.2 5L9.9 0 0 12.5l6.3 5L623.8 507l6.3 5 9.9-12.5-6.3-5L16.2 5zM467.3 464L144 464 16 464l0-128c0-55.7 35.6-103.1 85.3-120.7l10.7-3.8 0-11.3 0-8.2c0-2.8 .1-5.5 .2-8.3l-15-11.8c-.8 6.6-1.3 13.3-1.3 20.1l0 8.2C40.1 220 0 273.3 0 336L0 464l0 16 16 0 128 0 343.5 0-20.3-16zM256 32c-28.3 0-54.9 7.3-77.9 20.2l13.7 10.8C211.1 53.4 232.9 48 256 48c53.3 0 99.9 29 124.8 72.2l8.5 14.8 14.2-9.5c12.7-8.5 28-13.5 44.4-13.5c44.2 0 80 35.8 80 80l0 36 0 12.4 12 3.1c48.3 12.4 84 56.3 84 108.5l0 52.3 16 12.6 0-64.9c0-59.6-40.8-109.8-96-124l0-36c0-53-43-96-96-96c-15.2 0-29.5 3.5-42.3 9.8c-3.8 1.9-7.5 4-11 6.4c-2.7-4.6-5.6-9.1-8.7-13.4C357 58.3 309.6 32 256 32z" />
    </Icon>
);

export default CloudSlash;