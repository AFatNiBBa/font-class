
import { Icon } from "../../index";

/**
 * A component that renders the `egg` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/egg?s=sharp-regular egg}
 * @preview ![egg](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/egg.svg)
 */
const Egg: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 448c-74.7 0-144-75.4-144-160c0-48.3 14.1-107.7 41.3-153.5C116.4 88.8 151.1 64 192 64s75.6 24.8 102.7 70.5C321.9 180.3 336 239.7 336 288c0 84.6-69.3 160-144 160zM0 288C0 394 86 496 192 496s192-102 192-208c0-112-64-272-192-272S0 176 0 288zm112 0c0-24.5 5-54.4 15.1-82.8c10.1-28.5 25-54.1 43.7-71.2l-21.6-23.6c-23.9 21.8-41.1 52.7-52.3 84.2C85.7 226.1 80 259.7 80 288l0 16 32 0 0-16z" />
    </Icon>
);

export default Egg;