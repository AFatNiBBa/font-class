
import { Icon } from "../../index";

/**
 * A component that renders the `box` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box?s=light box}
 * @preview ![box](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/box.svg)
 */
const Box: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M342.4 64L240 64l0 96 165.9 0L371.7 83c-5.1-11.6-16.6-19-29.2-19zM416 192l-176 0-32 0L32 192l0 224c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-224zM42.1 160L208 160l0-96L105.6 64c-12.6 0-24.1 7.4-29.2 19L42.1 160zM342.4 32c25.3 0 48.2 14.9 58.5 38l41.6 93.6c3.6 8.2 5.5 17 5.5 26L448 416c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 189.6c0-9 1.9-17.8 5.5-26L47.1 70c10.3-23.1 33.2-38 58.5-38l236.8 0z" />
    </Icon>
);

export default Box;