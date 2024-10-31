
import { Icon } from "../../index";

/**
 * A component that renders the `banana` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/banana?s=sharp-regular banana}
 * @preview ![banana](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/banana.svg)
 */
const Banana: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288.1 55c10.3 27.7 15.9 57.7 15.9 89c0 39.6-9 77.1-25 110.6l41.4 24.6C340.6 238.4 352 192.5 352 144c0-23.8-2.7-47-7.9-69.2l2.5-1.7C380 114.3 400 166.8 400 224c0 16-1.6 31.7-4.6 46.9l50.3-10.6c1.5-11.9 2.3-24 2.3-36.3c0-84.7-36.6-160.9-94.8-213.6L288.1 55zM420.3 347.4l43-9.1 54.7 61.6L534 417.9 569.9 386l-15.9-17.9-64-72-9.3-10.4-13.6 2.9-27.7 5.8L324.2 318.6l-60.9-36.1s0 0 0 0l-39.1-23.2-11.5-6.8-11.8 6.2-92 48L87.6 317.8l22.2 42.6 21.3-11.1 80.2-41.8 22.1 13.1C186.7 369.5 120.9 400 48 400L0 400s0 0 0 0l0 48 0 64s0 0 0 0l48 0 112 0c107 0 200.4-58.4 250.1-145c.7-1.2 1.3-2.3 2-3.5c2.9-5.3 5.7-10.6 8.3-16.1z" />
    </Icon>
);

export default Banana;