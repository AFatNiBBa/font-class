
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-pointer` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-pointer?s=thin arrow-pointer}
 * @preview ![arrow-pointer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrow-pointer.svg)
 */
const ArrowPointer: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M144 304l153.9 0c3.4 0 6.1-2.7 6.1-6.1c0-1.7-.7-3.4-2-4.5L28 49.8c-1.3-1.2-3-1.8-4.8-1.8c-4 0-7.2 3.2-7.2 7.2L16 426c0 3.3 2.7 6 6 6c1.7 0 3.4-.7 4.5-2.1L132 309.5c3-3.5 7.4-5.5 12-5.5zM0 426L0 55.2C0 42.4 10.4 32 23.2 32c5.7 0 11.2 2.1 15.4 5.9l274 243.6c4.7 4.2 7.4 10.2 7.4 16.5c0 12.2-9.9 22.1-22.1 22.1l-145.1 0 70.4 148.6c1.9 4 .2 8.8-3.8 10.7s-8.8 .2-10.7-3.8L138.3 326.6 38.6 440.5C34.4 445.3 28.4 448 22 448c-12.2 0-22-9.9-22-22z" />
    </Icon>
);

export default ArrowPointer;