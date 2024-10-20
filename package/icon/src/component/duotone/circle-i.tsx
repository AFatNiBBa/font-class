
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-i` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-i?s=duotone circle-i}
 * @preview ![circle-i](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-i.svg)
 */
const CircleI: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM160 152c0-13.3 10.7-24 24-24l72 0 72 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0 0 160 48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0 0-160-48 0c-13.3 0-24-10.7-24-24z" />
        <path d="M160 152c0-13.3 10.7-24 24-24l72 0 72 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0 0 160 48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0 0-160-48 0c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default CircleI;