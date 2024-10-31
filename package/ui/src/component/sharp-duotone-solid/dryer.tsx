
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dryer` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dryer?s=sharp-duotone-solid dryer}
 * @preview ![dryer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/dryer.svg)
 */
const Dryer: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M80.9 288l95.1 0 16 0 0 32-16 0-95.1 0c8 72 69 128 143.1 128c79.5 0 144-64.5 144-144s-64.5-144-144-144c-74.1 0-135.2 56-143.1 128zM160 88a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z" />
        <path d="M448 0L0 0 0 512l448 0L448 0zM224 160a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM64 88a24 24 0 1 1 48 0A24 24 0 1 1 64 88zM184 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Dryer;