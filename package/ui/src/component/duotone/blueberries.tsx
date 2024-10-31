
import { Icon, generic } from "../../index";

/**
 * A component that renders the `blueberries` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blueberries?s=duotone blueberries}
 * @preview ![blueberries](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/blueberries.svg)
 */
const Blueberries: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M112 272c0 8.8 7.2 16 16 16l32 0 0 32c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-32c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 32-32 0c-8.8 0-16 7.2-16 16zm48.7-111.3c5.1-.4 10.2-.7 15.3-.7c97.2 0 176 78.8 176 176c0 1.3 0 2.6 0 3.9s-.1 2.6-.1 3.8c-.1 2.6-.3 5.1-.5 7.6C441.4 343.6 512 268 512 176C512 78.8 433.2 0 336 0C244 0 168.4 70.6 160.7 160.7zM304 112c0-8.8 7.2-16 16-16l32 0 0-32c0-8.8 7.2-16 16-16s16 7.2 16 16l0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32-32 0c-8.8 0-16-7.2-16-16z" />
        <path d="M384 64l0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l32 0 0-32c0-8.8 7.2-16 16-16s16 7.2 16 16zM0 336a176 176 0 1 1 352 0A176 176 0 1 1 0 336zM176 208c-8.8 0-16 7.2-16 16l0 32-32 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0 0 32c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-32c0-8.8-7.2-16-16-16z" />
    </Icon>
);

export default Blueberries;