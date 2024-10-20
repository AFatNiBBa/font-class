
import { Icon } from "../../index";

/**
 * A component that renders the `bowl-scoop` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bowl-scoop?s=sharp-solid bowl-scoop}
 * @preview ![bowl-scoop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bowl-scoop.svg)
 */
const BowlScoop: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 224C32 118 118 32 224 32s192 86 192 192L32 224zM4.5 300.7L0 256l448 0-4.5 44.7C437 366.2 381.9 416 316.2 416L256 416l80 72 0 24-224 0 0-24 80-72-60.2 0C66.1 416 11 366.2 4.5 300.7z" />
    </Icon>
);

export default BowlScoop;