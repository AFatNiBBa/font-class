
import { Icon } from "../../index";

/**
 * A component that renders the `stethoscope` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stethoscope?s=sharp-solid stethoscope}
 * @preview ![stethoscope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/stethoscope.svg)
 */
const Stethoscope: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M119.3 1.2l15.5 62.1-31 7.8L96 73l0 119c0 53 43 96 96 96s96-43 96-96l0-119L280.2 71l-31-7.8L264.7 1.2l31 7.8 32 8L352 23l0 25 0 144c0 77.2-54.6 141.6-127.3 156.7C231 404.6 278.4 448 336 448c61.9 0 112-50.1 112-112l0-70.7c-28.3-12.3-48-40.5-48-73.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3l0 70.7c0 97.2-78.8 176-176 176c-92.9 0-168.9-71.9-175.5-163.1C87.2 334.2 32 269.6 32 192L32 48l0-25L56.2 17l32-8 31-7.8zM480 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Stethoscope;