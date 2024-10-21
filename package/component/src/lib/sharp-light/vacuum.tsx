
import { Icon } from "../../index";

/**
 * A component that renders the `vacuum` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vacuum?s=sharp-light vacuum}
 * @preview ![vacuum](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/vacuum.svg)
 */
const Vacuum: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M237 32l291 0c44.2 0 80 35.8 80 80c0 34.8-22.2 64.4-53.2 75.4C519.9 150.8 470.6 128 416 128l-32 0-32 0 0 32 0 132c10.2-2.6 21-4 32-4l0-128 32 0c88.4 0 160 71.6 160 160l0 160-81.1 0c-7 12-15.8 22.8-26.2 32L576 512l32 0 0-32 0-160c0-39.5-11.9-76.1-32.3-106.6c38-17.9 64.3-56.6 64.3-101.4C640 50.1 589.9 0 528 0L224 0 211 0l-2.7 12.7L164.3 224l32.7 0L237 32zM190.3 256l-32.7 0L131 384l-67 0L0 448l0 32 0 32 32 0 160 0 32 0 0-32 0-64 0-32-32 0-28.3 0 26.7-128zM77.3 416l66.4 0c.2 0 .4 0 .6 0l47.7 0 0 64L32 480l0-18.7L77.3 416zM384 352a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0 160a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm24-96a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Vacuum;