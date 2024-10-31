
import { Icon, generic } from "../../index";

/**
 * A component that renders the `treasure-chest` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/treasure-chest?s=sharp-duotone-solid treasure-chest}
 * @preview ![treasure-chest](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/treasure-chest.svg)
 */
const TreasureChest: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 160l0 96 96 0L96 36C40.8 50.2 0 100.4 0 160zM0 288L0 480l96 0 0-192L0 288zM160 32l0 224 64 0 0-64 128 0 0 64 64 0 0-224L160 32zm0 256l0 192 256 0 0-192-64 0 0 64-128 0 0-64-64 0zM480 36l0 220 96 0 0-96c0-59.6-40.8-109.8-96-124zm0 252l0 192 96 0 0-192-96 0z" />
        <path d="M160 32l0 224-64 0L96 36c10.2-2.6 21-4 32-4l32 0zM416 256l0-224 32 0c11 0 21.8 1.4 32 4l0 220-64 0zM224 192l128 0 0 160-128 0 0-160zm80 32l-32 0 0 16 0 64 0 16 32 0 0-16 0-64 0-16zM160 480l-64 0 0-192 64 0 0 192zm256 0l0-192 64 0 0 192-64 0z" />
    </Icon>
);

export default TreasureChest;