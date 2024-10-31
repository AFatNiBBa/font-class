
import { Icon } from "../../index";

/**
 * A component that renders the `interrobang` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/interrobang?s=regular interrobang}
 * @preview ![interrobang](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/interrobang.svg)
 */
const Interrobang: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M144 80c-44.2 0-80 35.8-80 80c0 13.3-10.7 24-24 24s-24-10.7-24-24C16 89.3 73.3 32 144 32l32 0c70.7 0 128 57.3 128 128l0 4.6c0 40.1-20.1 77.6-53.4 99.8l-52.3 34.9c-8.9 5.9-14.2 15.9-14.2 26.6l0 2 0 16c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-16 0-2 0-158c0-13.3 10.7-24 24-24s24 10.7 24 24l0 83.2 39.9-26.6c20-13.4 32.1-35.8 32.1-59.9l0-4.6c0-44.2-35.8-80-80-80l-32 0zM128 448a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default Interrobang;