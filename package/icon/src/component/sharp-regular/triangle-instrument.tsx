
import { Icon } from "../../index";

/**
 * A component that renders the `triangle-instrument` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/triangle-instrument?s=sharp-regular triangle-instrument}
 * @preview ![triangle-instrument](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/triangle-instrument.svg)
 */
const TriangleInstrument: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M312 24l0-24L264 0l0 24 0 48-4 6.6L28.8 464 0 512l56 0 464 0 56 0-28.8-48L437.7 281.5l-35 35L491.2 464 84.8 464 288 125.3l72.3 120.5-53.5 53.5c-5.9-2.1-12.2-3.2-18.8-3.2c-30.9 0-56 25.1-56 56s25.1 56 56 56s56-25.1 56-56c0-6.6-1.1-12.9-3.2-18.8l45-45 35-35L537 137l17-17L520 86.1l-17 17L395.3 210.8 316 78.6 312 72l0-48z" />
    </Icon>
);

export default TriangleInstrument;