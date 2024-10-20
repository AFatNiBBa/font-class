
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lightbulb` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lightbulb?s=sharp-duotone-solid lightbulb}
 * @preview ![lightbulb](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/lightbulb.svg)
 */
const Lightbulb: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c19.8 27.1 39.7 54.4 49.2 86.2l160 0c9.6-31.9 29.5-59.1 49.2-86.2c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176zm64 0c0-61.9 50.1-112 112-112l0 32c-44.2 0-80 35.8-80 80l-32 0z" />
        <path d="M112 384V512H272V384H112z" />
    </Icon>
);

export default Lightbulb;