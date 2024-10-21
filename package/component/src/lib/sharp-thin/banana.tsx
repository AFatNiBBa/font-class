
import { Icon } from "../../index";

/**
 * A component that renders the `banana` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/banana?s=sharp-thin banana}
 * @preview ![banana](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/banana.svg)
 */
const Banana: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M351.6 30.9L307.2 61.3C315.5 87.3 320 115.1 320 144c0 40.6-8.9 79-24.8 113.6l-12.3-11.7C296.5 214.7 304 180.2 304 144c0-31.4-5.6-61.3-15.9-89l65.1-44.6C411.4 63.1 448 139.3 448 224c0 17.8-1.6 35.3-4.7 52.2l-17.4 5.5c4-18.6 6.1-37.9 6.1-57.7c0-75.5-30.8-143.8-80.4-193.1zM258.8 289.3l-16.6-15.9L147 311.4l-7.4 3-5.9-14.9 7.4-3 100-40 4.8-1.9 3.7 3.6 88.6 84.7 147.5-46.6 5.4-1.7 3.4 4.5 72 96 4.8 6.4-12.8 9.6-4.8-6.4L485 313.3l-57.8 18.2C384.6 437.3 281 512 160 512L16 512 0 512l0-16 0-80 0-16 16 0 32 0c87.4 0 164.6-43.8 210.8-110.7zm148.2 48.7l-68.6 21.7-4.5 1.4-3.4-3.3-59.9-57.3C221.3 370.3 140 416 48 416l-32 0 0 80 144 0c109.5 0 203.9-64.7 247.1-158.1z" />
    </Icon>
);

export default Banana;