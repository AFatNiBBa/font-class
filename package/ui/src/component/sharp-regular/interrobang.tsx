
import { Icon } from "../../index";

/**
 * A component that renders the `interrobang` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/interrobang?s=sharp-regular interrobang}
 * @preview ![interrobang](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/interrobang.svg)
 */
const Interrobang: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M64 160c0-44.2 35.8-80 80-80l32 0c44.2 0 80 35.8 80 80l0 7.4c0 22.9-10.9 44.5-29.4 58.1L184 256.6l0-88.6 0-24-48 0 0 24 0 123.8 0 12.2 0 24 0 16 0 8 0 16 48 0 0-16 0-8 0-16 0-11.8 71-52c30.8-22.6 49-58.5 49-96.8l0-7.4c0-70.7-57.3-128-128-128l-32 0C73.3 32 16 89.3 16 160l0 16 48 0 0-16zm64 256l0 64 64 0 0-64-64 0z" />
    </Icon>
);

export default Interrobang;