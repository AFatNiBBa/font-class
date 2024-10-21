
import { Icon, generic } from "../../index";

/**
 * A component that renders the `blueberries` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blueberries?s=sharp-duotone-solid blueberries}
 * @preview ![blueberries](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/blueberries.svg)
 */
const Blueberries: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M112 256l0 32 16 0 32 0 0 32 0 16 32 0 0-16 0-32 32 0 16 0 0-32-16 0-32 0 0-32 0-16-32 0 0 16 0 32-32 0-16 0zm48.7-95.3c5.1-.4 10.2-.7 15.3-.7c97.2 0 176 78.8 176 176c0 1.3 0 2.6 0 3.9s-.1 2.6-.1 3.8c-.1 2.6-.3 5.1-.5 7.6C441.4 343.6 512 268 512 176C512 78.8 433.2 0 336 0C244 0 168.4 70.6 160.7 160.7zM304 96l16 0 32 0 0-32 0-16 32 0 0 16 0 32 32 0 16 0 0 32-16 0-32 0 0 32 0 16-32 0 0-16 0-32-32 0-16 0 0-32z" />
        <path d="M384 64l0 32 32 0 16 0 0 32-16 0-32 0 0 32 0 16-32 0 0-16 0-32-32 0-16 0 0-32 16 0 32 0 0-32 0-16 32 0 0 16zM0 336a176 176 0 1 1 352 0A176 176 0 1 1 0 336zM192 208l-32 0 0 16 0 32-32 0-16 0 0 32 16 0 32 0 0 32 0 16 32 0 0-16 0-32 32 0 16 0 0-32-16 0-32 0 0-32 0-16z" />
    </Icon>
);

export default Blueberries;