
import { Icon } from "../../index";

/**
 * A component that renders the `treasure-chest` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/treasure-chest?s=solid treasure-chest}
 * @preview ![treasure-chest](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/treasure-chest.svg)
 */
const TreasureChest: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 160l0 96 128 0 0-224C57.3 32 0 89.3 0 160zM0 432c0 26.5 21.5 48 48 48l80 0 0-192L0 288 0 432zM416 288l-64 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32-64 0 0 192 256 0 0-192zM528 480c26.5 0 48-21.5 48-48l0-144-128 0 0 192 80 0zm48-320c0-70.7-57.3-128-128-128l0 224 128 0 0-96zM416 256l0-224L160 32l0 224 64 0 0-32c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 32 64 0zM304 240c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64z" />
    </Icon>
);

export default TreasureChest;