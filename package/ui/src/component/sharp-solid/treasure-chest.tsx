
import { Icon } from "../../index";

/**
 * A component that renders the `treasure-chest` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/treasure-chest?s=sharp-solid treasure-chest}
 * @preview ![treasure-chest](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/treasure-chest.svg)
 */
const TreasureChest: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 160l0 96 128 0 0-224C57.3 32 0 89.3 0 160zM0 480l128 0 0-192L0 288 0 480zm416 0l0-192-64 0 0 64-128 0 0-64-64 0 0 192 256 0zm160 0l0-192-128 0 0 192 128 0zm0-320c0-70.7-57.3-128-128-128l0 224 128 0 0-96zM416 256l0-224L160 32l0 224 64 0 0-64 128 0 0 64 64 0zM304 240l0-16-32 0 0 16 0 64 0 16 32 0 0-16 0-64z" />
    </Icon>
);

export default TreasureChest;