
import { Icon, generic } from "../../index";

/**
 * A component that renders the `star-of-life` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-of-life?s=sharp-duotone-solid star-of-life}
 * @preview ![star-of-life](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/star-of-life.svg)
 */
const StarOfLife: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M208 0l96 0 0 172.9L453.7 86.4l48 83.1L352 256l149.7 86.4-48 83.1L304 339.1 304 512l-96 0 0-172.9L58.3 425.6l-48-83.1L160 256 10.3 169.6l48-83.1L208 172.9 208 0z" />
    </Icon>
);

export default StarOfLife;