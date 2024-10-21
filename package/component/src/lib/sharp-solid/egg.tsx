
import { Icon } from "../../index";

/**
 * A component that renders the `egg` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/egg?s=sharp-solid egg}
 * @preview ![egg](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/egg.svg)
 */
const Egg: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 496C86 496 0 394 0 288C0 176 64 16 192 16s192 160 192 272c0 106-86 208-192 208zM96 288c0-24.5 5-54.4 15.1-82.8c10.1-28.5 25-54.1 43.7-71.2l-21.6-23.6c-23.9 21.8-41.1 52.7-52.3 84.2C69.7 226.1 64 259.7 64 288l0 16 32 0 0-16z" />
    </Icon>
);

export default Egg;