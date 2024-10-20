
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bowl-scoop` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bowl-scoop?s=sharp-duotone-solid bowl-scoop}
 * @preview ![bowl-scoop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bowl-scoop.svg)
 */
const BowlScoop: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 224c0 10.9 .9 21.6 2.7 32l378.7 0c1.7-10.4 2.7-21.1 2.7-32c0-106-86-192-192-192S32 118 32 224z" />
        <path d="M448 256L0 256l4.5 44.7C11 366.2 66.1 416 131.8 416l60.2 0-80 72 0 24 224 0 0-24-80-72 60.2 0c65.8 0 120.8-49.8 127.4-115.3L448 256z" />
    </Icon>
);

export default BowlScoop;