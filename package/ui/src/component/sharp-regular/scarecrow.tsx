
import { Icon } from "../../index";

/**
 * A component that renders the `scarecrow` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scarecrow?s=sharp-regular scarecrow}
 * @preview ![scarecrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/scarecrow.svg)
 */
const Scarecrow: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 160a56 56 0 1 0 0-112 56 56 0 1 0 0 112zm0 48c-29.5 0-56.1-12.3-75-32l-69 0 0 32 56 0 26.5 0-2.6 26.4L148.5 348.1l15.6-8.9 12.9-7.4 12.3 8.2L224 363.2 258.7 340l12.3-8.2 12.9 7.4 15.6 8.9L288.1 234.4 285.5 208l26.5 0 56 0 0-32-69 0c-18.9 19.7-45.6 32-75 32zM328 104c0 8.3-1 16.3-2.8 24l50.8 0 16 0 24 0 16 0-16 32 32 32-32 32 16 32-16 0-24 0-16 0-37.5 0 13.4 133.6 4.6 46.3-40.4-23.1L273 388.2 237.3 412 224 420.8 210.7 412 175 388.2l-43.1 24.6L91.5 435.9l4.6-46.3L109.5 256 72 256l-16 0-24 0-16 0 16-32L0 192l32-32L16 128l16 0 24 0 16 0 50.8 0c-1.8-7.7-2.8-15.7-2.8-24C120 46.6 166.6 0 224 0s104 46.6 104 104zM200 72a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm32 32a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM200 488l0-44.7 24 16 24-16 0 44.7 0 24-48 0 0-24z" />
    </Icon>
);

export default Scarecrow;