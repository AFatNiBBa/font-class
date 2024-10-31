
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dice-d12` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d12?s=sharp-duotone-solid dice-d12}
 * @preview ![dice-d12](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/dice-d12.svg)
 */
const DiceD12: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M6.6 176L64.1 76.4 240 139.3l0 106.8L131.2 300.5 6.6 176zM94.8 53.4L187.4 0 324.6 0l92.6 53.4L256 111 94.8 53.4zM272 139.3L447.9 76.4 505.4 176 380.8 300.5 272 246.1l0-106.8z" />
        <path d="M398.1 328.5L512 214.6l0 110L443.4 443.4l-99.1 57.2 53.8-172.1zm-33.4-.3L307.2 512l-102.5 0L147.3 328.2 256 273.9l108.7 54.3zm-250.8 .3l53.8 172.1L68.6 443.4 0 324.6l0-110L113.9 328.5z" />
    </Icon>
);

export default DiceD12;