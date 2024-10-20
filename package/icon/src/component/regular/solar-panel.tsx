
import { Icon } from "../../index";

/**
 * A component that renders the `solar-panel` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/solar-panel?s=regular solar-panel}
 * @preview ![solar-panel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/solar-panel.svg)
 */
const SolarPanel: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M114.5 48c-3.8 0-7.1 2.7-7.9 6.5L86.5 160l116.6 0L214.3 48l-99.8 0zm83.8 160L77.4 208 54.8 326.5c-.9 4.9 2.8 9.5 7.9 9.5l122.8 0 12.8-128zm48.2 0L233.7 336l172.6 0L393.5 208l-147 0zm142.2-48L377.5 48l-115 0L251.3 160l137.4 0zm53 48l12.8 128 122.8 0c5 0 8.8-4.6 7.9-9.5L562.6 208l-120.9 0zm111.8-48L533.4 54.5c-.7-3.8-4-6.5-7.9-6.5l-99.8 0 11.2 112 116.6 0zM59.5 45.5C64.5 19.1 87.6 0 114.5 0l411 0c26.9 0 50 19.1 55 45.5l51.8 272c6.6 34.5-19.9 66.5-55 66.5L344 384l0 80 80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-208 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l80 0 0-80L62.7 384c-35.1 0-61.6-32-55-66.5l51.8-272z" />
    </Icon>
);

export default SolarPanel;