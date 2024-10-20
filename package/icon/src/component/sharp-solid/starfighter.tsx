
import { Icon } from "../../index";

/**
 * A component that renders the `starfighter` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/starfighter?s=sharp-solid starfighter}
 * @preview ![starfighter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/starfighter.svg)
 */
const Starfighter: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M352 0l32 256 0 224-128 0 0-224L288 0l64 0zM288 256l0 64 64 0 0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32zM72 72l0 24 0 24 24 0 0 48-24 0 0 184 56 0 0-64 96 0 0 64 0 64 0 32 0 32 0 32-64 0 0-32 0-12.8L72 432l0 16 0 24-48 0 0-24 0-280L0 168l0-48 24 0 0-24 0-24 48 0zm544 0l0 24 0 24 24 0 0 48-24 0 0 280 0 24-48 0 0-24 0-16-88 35.2 0 12.8 0 32-64 0 0-32 0-32 0-32 0-64 0-64 96 0 0 64 56 0 0-184-24 0 0-48 24 0 0-24 0-24 48 0z" />
    </Icon>
);

export default Starfighter;