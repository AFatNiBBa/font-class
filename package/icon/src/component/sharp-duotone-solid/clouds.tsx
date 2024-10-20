
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clouds` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clouds?s=sharp-duotone-solid clouds}
 * @preview ![clouds](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/clouds.svg)
 */
const Clouds: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 192l0 96 96 0 64.9 0c8-72 69-128 143.1-128c41.7 0 79.3 17.8 105.6 46.1c11.7-6.5 24.6-11 38.4-13l0-33.1c0-53-43-96-96-96c-14 0-27.2 3-39.2 8.4C296.8 30.1 255.9 0 208 0C151.6 0 104.9 41.7 97.1 96L96 96C43 96 0 139 0 192z" />
        <path d="M128 512l96 0 320 0 96 0 0-96c0-53-43-96-96-96l0-16c0-44.2-35.8-80-80-80c-24.3 0-46.1 10.9-60.8 28c-18.7-35.7-56.1-60-99.2-60c-61.9 0-112 50.1-112 112l0 21.5c-37.3 13.2-64 48.7-64 90.5l0 96z" />
    </Icon>
);

export default Clouds;