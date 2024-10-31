
import { Icon } from "../../index";

/**
 * A component that renders the `interrobang` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/interrobang?s=sharp-solid interrobang}
 * @preview ![interrobang](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/interrobang.svg)
 */
const Interrobang: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M144 96c-35.3 0-64 28.7-64 64l0 16-64 0 0-16C16 89.3 73.3 32 144 32l32 0c70.7 0 128 57.3 128 128l0 9.3c0 39.3-18 76.4-48.9 100.6L192 319.6l0 .4 0 32-64 0 0-32 0-16 0-15.6L128 176l0-32 64 0 0 32 0 62.2 23.5-18.5C231 207.5 240 189 240 169.3l0-9.3c0-35.3-28.7-64-64-64l-32 0zM120 400l80 0 0 80-80 0 0-80z" />
    </Icon>
);

export default Interrobang;