
import { Icon } from "../../index";

/**
 * A component that renders the `stapler` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stapler?s=sharp-regular stapler}
 * @preview ![stapler](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/stapler.svg)
 */
const Stapler: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 384l0 48L32 432l0 48 416 0 48 0 48 0 48 0 48 0 0-48 0-96 0-48 0-48L255.6 47.8C234.8 37.4 211.9 32 188.6 32C131.9 32 80 64.1 54.6 114.8L22 180 0 224l47.7 11.9L64 240l0 120 0 24 24 0 360 0zm0-48l-336 0 0-84 336 84zm96 96l-48 0 0-96 0-37.5-36.4-9.1L69.7 191.9l27.8-55.6C114.8 101.8 150 80 188.6 80c15.8 0 31.4 3.7 45.6 10.8L592 269.7l0 18.3 0 48 0 96-48 0z" />
    </Icon>
);

export default Stapler;