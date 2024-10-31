
import { Icon } from "../../index";

/**
 * A component that renders the `triangle-instrument` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/triangle-instrument?s=sharp-solid triangle-instrument}
 * @preview ![triangle-instrument](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/triangle-instrument.svg)
 */
const TriangleInstrument: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320 32l0-32L256 0l0 32 0 53.3-5.3 8.9L38.4 448 0 512l74.6 0 426.7 0 74.6 0-38.4-64L437.7 281.5 391 328.1 463 448 113 448 288 156.4l60.6 101-41.8 41.8c-5.9-2.1-12.2-3.2-18.8-3.2c-30.9 0-56 25.1-56 56s25.1 56 56 56s56-25.1 56-56c0-6.6-1.1-12.9-3.2-18.8l33.3-33.3 46.6-46.6L537 137l17-17L520 86.1l-17 17L395.3 210.8l-70-116.6L320 85.3 320 32z" />
    </Icon>
);

export default TriangleInstrument;