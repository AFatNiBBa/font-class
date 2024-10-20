
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-pointer` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-pointer?s=regular arrow-pointer}
 * @preview ![arrow-pointer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrow-pointer.svg)
 */
const ArrowPointer: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M144 272l85.8 0L48 110.4l0 246.4 59.9-68.4C117 278 130.2 272 144 272zM0 426L0 55.2C0 42.4 10.4 32 23.2 32c5.7 0 11.2 2.1 15.4 5.9l274 243.6c4.7 4.2 7.4 10.2 7.4 16.5c0 12.2-9.9 22.1-22.1 22.1l-127.4 0 59.1 126.8c5.6 12 .4 26.3-11.6 31.9s-26.3 .4-31.9-11.6L126.7 339.7 38.6 440.5C34.4 445.3 28.4 448 22 448c-12.2 0-22-9.9-22-22z" />
    </Icon>
);

export default ArrowPointer;