
import { Icon } from "../../index";

/**
 * A component that renders the `house-signal` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-signal?s=light house-signal}
 * @preview ![house-signal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/house-signal.svg)
 */
const HouseSignal: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M325.6 3.9c6-5.1 14.8-5.1 20.8 0l224 192c6.7 5.8 7.5 15.9 1.7 22.6s-15.8 7.5-22.6 1.7L512 187.9 512 352c0 35.3-28.7 64-64 64l-169.9 0c-3.1-11-6.9-21.7-11.3-32L448 384c17.7 0 32-14.3 32-32l0-191.5L336 37.1 192 160.5l0 123.8c-10.1-8.3-20.8-15.9-32-22.7l0-73.7-37.6 32.2c-6.7 5.8-16.8 5-22.6-1.7s-5-16.8 1.7-22.6l224-192zM304 176l64 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zm0 32l0 64 64 0 0-64-64 0zM16 256c132.5 0 240 107.5 240 240c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-114.9-93.1-208-208-208c-8.8 0-16-7.2-16-16s7.2-16 16-16zM32 448a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM0 368c0-8.8 7.2-16 16-16c79.5 0 144 64.5 144 144c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9-50.1-112-112-112c-8.8 0-16-7.2-16-16z" />
    </Icon>
);

export default HouseSignal;