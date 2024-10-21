
import { Icon, generic } from "../../index";

/**
 * A component that renders the `candy` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/candy?s=sharp-duotone-solid candy}
 * @preview ![candy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/candy.svg)
 */
const Candy: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 233l0 46 42.6 12.5L7 327l28.2 38.2 101-53.5c-5.3-17.6-8.2-36.4-8.2-55.7c0-1.2 0-2.4 0-3.6s.1-2.4 .1-3.6c.1-2.4 .2-4.8 .4-7.2c.4-4.8 .9-9.5 1.6-14.1c1.4-9.3 3.4-18.4 6.1-27.2l-101-53.5L7 185l35.6 35.6L0 233zm503.8-32.8c5.3 17.6 8.2 36.4 8.2 55.7c0 1.2 0 2.4 0 3.6s-.1 2.4-.1 3.6c-.1 2.4-.2 4.8-.4 7.2c-.4 4.8-.9 9.5-1.6 14.1c-1.4 9.3-3.4 18.4-6.1 27.2l101 53.5L633 327l-35.6-35.6L640 279l0-46-42.6-12.5L633 185l-28.2-38.2-101 53.5z" />
        <path d="M318.1 64c-24.5 .2-47.9 5.1-69.4 13.7L419.9 420c20.3-12.4 38.1-28.5 52.6-47.3L318.1 64zM492.3 340.8C504.9 315.2 512 286.4 512 256c0-93.9-67.4-172.1-156.5-188.7L492.3 340.8zm-101 93.5L220.1 92c-20.3 12.4-38.2 28.5-52.6 47.3L321.9 448c24.5-.2 47.9-5.1 69.4-13.7zM284.5 444.7L147.7 171.2C135.1 196.8 128 225.6 128 256c0 93.9 67.4 172.1 156.5 188.7z" />
    </Icon>
);

export default Candy;