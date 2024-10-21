
import { Icon } from "../../index";

/**
 * A component that renders the `toolbox` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toolbox?s=thin toolbox}
 * @preview ![toolbox](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/toolbox.svg)
 */
const Toolbox: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 56l160 0c13.3 0 24 10.7 24 24l0 48-208 0 0-48c0-13.3 10.7-24 24-24zM136 80l0 48-29.5 0c-17 0-33.3 6.7-45.3 18.7L18.7 189.3C6.7 201.3 0 217.5 0 234.5L0 336l0 80c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-80 0-101.5c0-17-6.7-33.3-18.7-45.3l-42.5-42.5c-12-12-28.3-18.7-45.3-18.7L376 128l0-48c0-22.1-17.9-40-40-40L176 40c-22.1 0-40 17.9-40 40zM496 328l-144 0 0-48c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 48-160 0 0-48c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 48L16 328l0-93.5c0-12.7 5.1-24.9 14.1-33.9l42.5-42.5c9-9 21.2-14.1 33.9-14.1l37.5 0 224 0 37.5 0c12.7 0 24.9 5.1 33.9 14.1l42.5 42.5c9 9 14.1 21.2 14.1 33.9l0 93.5zM16 344l144 0 0 48c0 4.4 3.6 8 8 8s8-3.6 8-8l0-48 160 0 0 48c0 4.4 3.6 8 8 8s8-3.6 8-8l0-48 144 0 0 72c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48l0-72z" />
    </Icon>
);

export default Toolbox;