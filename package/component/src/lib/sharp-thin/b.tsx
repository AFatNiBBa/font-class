
import { Icon } from "../../index";

/**
 * A component that renders the `b` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/b?s=sharp-thin b}
 * @preview ![b](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/b.svg)
 */
const B: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M8 32L0 32l0 8L0 240l0 8 0 8L0 472l0 8 8 0 192 0c66.3 0 120-53.7 120-120c0-56.7-39.3-104.2-92.1-116.7C263.6 224.5 288 187.1 288 144c0-61.9-50.1-112-112-112L8 32zM176 240L16 240 16 48l160 0c53 0 96 43 96 96s-43 96-96 96zM16 256l160 0 24 0c57.4 0 104 46.6 104 104s-46.6 104-104 104L16 464l0-208z" />
    </Icon>
);

export default B;