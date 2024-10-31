
import { Icon } from "../../index";

/**
 * A component that renders the `interrobang` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/interrobang?s=solid interrobang}
 * @preview ![interrobang](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/interrobang.svg)
 */
const Interrobang: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M144 96c-35.3 0-64 28.7-64 64c0 17.7-14.3 32-32 32s-32-14.3-32-32C16 89.3 73.3 32 144 32l32 0c70.7 0 128 57.3 128 128l0 3.6c0 43.6-22.1 84.1-58.8 107.7L203 298.4c-6.9 4.4-11 12-11 20.2l0 1.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-1.4L128 176c0-17.7 14.3-32 32-32s32 14.3 32 32l0 53.4 18.6-12c18.3-11.8 29.4-32.1 29.4-53.8l0-3.6c0-35.3-28.7-64-64-64l-32 0zM120 440a40 40 0 1 1 80 0 40 40 0 1 1 -80 0z" />
    </Icon>
);

export default Interrobang;