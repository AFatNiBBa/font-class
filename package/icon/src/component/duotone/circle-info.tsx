
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-info` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-info?s=duotone circle-info}
 * @preview ![circle-info](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-info.svg)
 */
const CircleInfo: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm192-8c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-64-24 0c-13.3 0-24-10.7-24-24zm96-88a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M256 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM192 248c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-64-24 0c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default CircleInfo;