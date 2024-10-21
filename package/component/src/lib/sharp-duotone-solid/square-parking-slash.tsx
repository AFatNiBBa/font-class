
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-parking-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-parking-slash?s=sharp-duotone-solid square-parking-slash}
 * @preview ![square-parking-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-parking-slash.svg)
 */
const SquareParkingSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 32l0 19.8 128 99.4 0-23.1 32 0 80 0c53 0 96 43 96 96c0 26.2-10.5 49.9-27.5 67.3c46.5 36.1 93 72.2 139.5 108.3L544 32 96 32zm0 139.6L96 480l391.4 0L288 322.9l0 29.1 0 32-64 0 0-32 0-64 0-15.5L96 171.6zM288 192l0 8.8c21.6 16.8 43.3 33.6 64.9 50.4C362 245.5 368 235.5 368 224c0-17.7-14.3-32-32-32l-48 0z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default SquareParkingSlash;