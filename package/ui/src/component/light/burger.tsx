
import { Icon } from "../../index";

/**
 * A component that renders the `burger` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/burger?s=light burger}
 * @preview ![burger](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/burger.svg)
 */
const Burger: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 64c94.4 0 172.9 68.1 189 157.8l0 .1c0 .1-.1 .2-.3 .3c-.7 .8-2.4 1.7-4.7 1.7L72 224c-2.4 0-4-1-4.7-1.7c-.1-.1-.2-.2-.3-.3l0-.1C83.1 132.1 161.6 64 256 64zM440 256c22.1 0 40.4-18.1 36.5-39.8C457.7 111.5 366.1 32 256 32S54.3 111.5 35.5 216.2C31.6 237.9 49.9 256 72 256l368 0zM128 448c-35.3 0-64-28.7-64-64l384 0c0 35.3-28.7 64-64 64l-256 0zM32 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96c0-17.7-14.3-32-32-32L64 352c-17.7 0-32 14.3-32 32zM16 304c0 8.8 7.2 16 16 16l448 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L32 288c-8.8 0-16 7.2-16 16zM160 160a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm112-48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm80 48a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Burger;