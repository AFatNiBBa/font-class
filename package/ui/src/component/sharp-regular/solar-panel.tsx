
import { Icon } from "../../index";

/**
 * A component that renders the `solar-panel` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/solar-panel?s=sharp-regular solar-panel}
 * @preview ![solar-panel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/solar-panel.svg)
 */
const SolarPanel: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M68.5 0L88 0 552 0l19.5 0 4 19.1 64 304 .5 2.4 0 2.5 0 32 0 24-24 0-272 0 0 80 80 0 24 0 0 48-24 0-208 0-24 0 0-48 24 0 80 0 0-80L24 384 0 384l0-24 0-32 0-2.5 .5-2.4 64-304L68.5 0zm5.3 208L48 330.5l0 5.5 137.5 0 12.8-128L73.8 208zm10.1-48l119.2 0L214.3 48 107.5 48 83.9 160zm162.6 48L233.7 336l172.6 0L393.5 208l-147 0zm142.2-48L377.5 48l-115 0L251.3 160l137.4 0zm53 48l12.8 128L592 336l0-5.5L566.2 208l-124.5 0zm114.4-48L532.5 48 425.7 48l11.2 112 119.2 0z" />
    </Icon>
);

export default SolarPanel;