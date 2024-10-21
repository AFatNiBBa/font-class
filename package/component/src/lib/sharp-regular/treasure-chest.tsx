
import { Icon } from "../../index";

/**
 * A component that renders the `treasure-chest` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/treasure-chest?s=sharp-regular treasure-chest}
 * @preview ![treasure-chest](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/treasure-chest.svg)
 */
const TreasureChest: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M160 80l256 0 0 160-64 0 0-48-128 0 0 48-64 0 0-160zM48 160c0-38.7 27.5-71 64-78.4L112 240l-64 0 0-80zm0 272l0-144 64 0 0 144-64 0zm368 0l-256 0 0-144 64 0 0 64 128 0 0-64 64 0 0 144zm112 0l-64 0 0-144 64 0 0 144zm0-272l0 80-64 0 0-158.4c36.5 7.4 64 39.7 64 78.4zM128 32C57.3 32 0 89.3 0 160L0 432l0 48 48 0 480 0 48 0 0-48 0-272c0-70.7-57.3-128-128-128L128 32zM304 256l0 32 0 16-32 0 0-16 0-32 0-16 32 0 0 16z" />
    </Icon>
);

export default TreasureChest;