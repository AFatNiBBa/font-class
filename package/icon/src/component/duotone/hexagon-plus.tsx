
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hexagon-plus` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-plus?s=duotone hexagon-plus}
 * @preview ![hexagon-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hexagon-plus.svg)
 */
const HexagonPlus: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M7.4 256c0 12.4 3.2 24.9 9.6 36l88.3 152.9c12.9 22.3 36.6 36 62.4 36l176.6 0c25.7 0 49.5-13.7 62.4-36L494.9 292c6.4-11.1 9.6-23.6 9.6-36s-3.2-24.9-9.6-36L406.6 67.1c-12.9-22.3-36.6-36-62.4-36l-176.6 0c-25.7 0-49.5 13.7-62.4 36L17.1 220c-6.4 11.1-9.6 23.6-9.6 36zM144 256c0-13.3 10.7-24 24-24c21.3 0 42.7 0 64 0l0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64c21.3 0 42.7 0 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24c-21.3 0-42.7 0-64 0l0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-64c-21.3 0-42.7 0-64 0c-13.3 0-24-10.7-24-24z" />
        <path d="M232 280l0 64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64 64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0 0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 64-64 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0z" />
    </Icon>
);

export default HexagonPlus;