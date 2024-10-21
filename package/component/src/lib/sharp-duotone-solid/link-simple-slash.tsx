
import { Icon, generic } from "../../index";

/**
 * A component that renders the `link-simple-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/link-simple-slash?s=sharp-duotone-solid link-simple-slash}
 * @preview ![link-simple-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/link-simple-slash.svg)
 */
const LinkSimpleSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 256c0 88.4 71.6 160 160 160l64 0 32 0 0-64-32 0-64 0c-53 0-96-43-96-96c0-24.9 9.5-47.6 25-64.6L70.7 151.7C46.6 179.7 32 216.1 32 256zM157.7 99.7c25.9 20.1 51.8 40.2 77.7 60.3l20.6 0 32 0 0-64-32 0-64 0c-11.8 0-23.2 1.3-34.3 3.7zM317.9 224c27.5 21.3 55 42.7 82.4 64l15.7 0 32 0 0-64-32 0-98.1 0zM352 96l0 64 32 0 64 0c53 0 96 43 96 96c0 42.9-28.2 79.3-67 91.5c18.8 14.6 37.6 29.2 56.4 43.8C578.2 363 608 313 608 256c0-88.4-71.6-160-160-160l-64 0-32 0z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default LinkSimpleSlash;