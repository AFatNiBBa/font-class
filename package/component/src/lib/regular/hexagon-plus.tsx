
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-plus` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-plus?s=regular hexagon-plus}
 * @preview ![hexagon-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/hexagon-plus.svg)
 */
const HexagonPlus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M17.1 292c-12.9-22.3-12.9-49.7 0-72L105.4 67.1c12.9-22.3 36.6-36 62.4-36l176.6 0c25.7 0 49.5 13.7 62.4 36L494.9 220c12.9 22.3 12.9 49.7 0 72L406.6 444.9c-12.9 22.3-36.6 36-62.4 36l-176.6 0c-25.7 0-49.5-13.7-62.4-36L17.1 292zm41.6-48c-4.3 7.4-4.3 16.6 0 24l88.3 152.9c4.3 7.4 12.2 12 20.8 12l176.6 0c8.6 0 16.5-4.6 20.8-12L453.4 268c4.3-7.4 4.3-16.6 0-24L365.1 91.1c-4.3-7.4-12.2-12-20.8-12l-176.6 0c-8.6 0-16.5 4.6-20.8 12L58.6 244zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
    </Icon>
);

export default HexagonPlus;