
import { Icon } from "../../index";

/**
 * A component that renders the `swords` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/swords?s=sharp-solid swords}
 * @preview ![swords](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/swords.svg)
 */
const Swords: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 96L0 0 96 16 393.4 313.4l-80 80L16 96zM408 456l-72 24-32-32L448 304l32 32-24 72 56 56-48 48-56-56zM96 336l57.4-57.4 80 80L176 416l32 32-32 32-72-24L48 512 0 464l56-56L32 336l32-32 32 32zM496 96L358.6 233.4l-80-80L416 16 512 0 496 96z" />
    </Icon>
);

export default Swords;