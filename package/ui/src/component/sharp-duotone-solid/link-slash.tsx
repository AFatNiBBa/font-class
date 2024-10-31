
import { Icon, generic } from "../../index";

/**
 * A component that renders the `link-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/link-slash?s=sharp-duotone-solid link-slash}
 * @preview ![link-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/link-slash.svg)
 */
const LinkSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M17.6 346.5c0 36.9 14.1 73.7 42.2 101.8c56.2 56.2 147.4 56.2 203.6 0L274.7 437l-45.3-45.3-11.3 11.3c-31.2 31.2-81.9 31.2-113.1 0s-31.2-81.9 0-113.1l62.2-62.2-50.6-39.9L59.8 244.7c-28.1 28.1-42.2 65-42.2 101.8zM184.9 120.8l53.3 41.4c30.1-15.4 67.9-10.6 93.1 14.6c20.1 20.1 27.3 48.4 21.5 74.3l53.3 41.4c23.8-53 14-117.4-29.5-160.9c-52.4-52.4-135.1-56-191.6-10.7zm36.6 149.7c-2.2 39.5 11.7 79.7 41.9 109.9c38.8 38.8 94.3 50.8 143.4 36.1l-185.3-146zM365.3 75l45.3 45.3 11.3-11.3c31.2-31.2 81.9-31.2 113.1 0s31.2 81.9 0 113.1l-96 96 51 39.6 90.3-90.3c56.2-56.2 56.2-147.4 0-203.6c-28.1-28.1-65-42.2-101.8-42.2s-73.7 14.1-101.8 42.2L365.3 75z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default LinkSlash;