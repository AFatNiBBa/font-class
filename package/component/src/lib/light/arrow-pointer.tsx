
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-pointer` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-pointer?s=light arrow-pointer}
 * @preview ![arrow-pointer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrow-pointer.svg)
 */
const ArrowPointer: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M0 426L0 55.2C0 42.4 10.4 32 23.2 32c5.7 0 11.2 2.1 15.4 5.9l274 243.6c4.7 4.2 7.4 10.2 7.4 16.5c0 12.2-9.9 22.1-22.1 22.1l-136.4 0 61.1 137.5c3.6 8.1 0 17.5-8.1 21.1s-17.5 0-21.1-8.1l-61-137.2L38.6 440.5C34.4 445.3 28.4 448 22 448c-12.2 0-22-9.9-22-22zM32 72l0 328 86.4-100.8c6.1-7.1 15-11.2 24.3-11.2L272 288 32 72z" />
    </Icon>
);

export default ArrowPointer;