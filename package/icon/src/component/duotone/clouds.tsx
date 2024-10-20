
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clouds` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clouds?s=duotone clouds}
 * @preview ![clouds](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/clouds.svg)
 */
const Clouds: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 192c0 53 43 96 96 96l64.9 0c8-72 69-128 143.1-128c41.7 0 79.3 17.7 105.6 46.1c9.9-5.5 20.7-9.6 32.1-11.9c4.1-10.6 6.3-22.2 6.3-34.2c0-53-43-96-96-96c-14 0-27.2 3-39.2 8.4C296.8 30.1 255.9 0 208 0C151.6 0 104.9 41.7 97.1 96L96 96C43 96 0 139 0 192z" />
        <path d="M128 416c0 53 43 96 96 96l320 0c53 0 96-43 96-96s-43-96-96-96c-.5 0-1.1 0-1.6 0c1.1-5.2 1.6-10.5 1.6-16c0-44.2-35.8-80-80-80c-24.3 0-46.1 10.9-60.8 28c-18.7-35.7-56.1-60-99.2-60c-61.9 0-112 50.1-112 112c0 7.1 .7 14.1 1.9 20.8C155.6 337.4 128 373.5 128 416z" />
    </Icon>
);

export default Clouds;