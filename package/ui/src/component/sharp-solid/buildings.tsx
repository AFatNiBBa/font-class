
import { Icon } from "../../index";

/**
 * A component that renders the `buildings` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/buildings?s=sharp-solid buildings}
 * @preview ![buildings](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/buildings.svg)
 */
const Buildings: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 0L192 0l0 128L0 128 0 512l192 0 320 0 0-384L512 0zM64 288l64 0 0 64-64 0 0-64zm256 32l-64 0 0-64 64 0 0 64zm64 0l0-64 64 0 0 64-64 0zM128 192l0 64-64 0 0-64 64 0zM256 64l64 0 0 64-64 0 0-64zm192 0l0 64-64 0 0-64 64 0zM256 224l0-64 64 0 0 64-64 0zm192 0l-64 0 0-64 64 0 0 64z" />
    </Icon>
);

export default Buildings;