
import { Icon } from "../../index";

/**
 * A component that renders the `drum` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/drum?s=sharp-solid drum}
 * @preview ![drum](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/drum.svg)
 */
const Drum: typeof Icon = x => (
    <Icon {...x}>
        <path d="M505.1 79.5L484.8 92.3l-47.4 29.8c46.1 18 74.6 46 74.6 85.9l0 32 0 128c0 31.3-27.4 58.8-72 78.7L440 328l0-9.3c-14.3 6.4-30.5 12-48 16.7l0 128c-33 8.9-71.1 14.5-112 16.1l0-128c-7.9 .3-15.9 .5-24 .5s-16.1-.2-24-.5l0 128c-40.9-1.6-79-7.2-112-16.1l0-128c-17.5-4.7-33.7-10.3-48-16.7l0 9.3 0 118.7C27.4 426.8 0 399.3 0 368L0 240l0-32C0 128 114.6 96 256 96c42.7 0 82.9 2.9 118.3 9.2l85-53.5 20.3-12.8 25.6 40.6zM243.2 187.7l66.6-41.9c-17-1.2-35-1.8-53.8-1.8c-68.2 0-125.4 7.9-163.6 22.7C53.6 181.8 48 197.4 48 208c0 .8 2.7 17.2 46 35.9c38.9 16.8 96 28.1 162 28.1s123.1-11.3 162-28.1c43.3-18.7 46-35.1 46-35.9c0-10.6-5.6-26.2-44.4-41.3c-10.6-4.1-22.7-7.7-36-10.7L268.8 228.3l-20.3 12.8-25.6-40.6 20.3-12.8z" />
    </Icon>
);

export default Drum;