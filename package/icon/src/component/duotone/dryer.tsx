
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dryer` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dryer?s=duotone dryer}
 * @preview ![dryer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/dryer.svg)
 */
const Dryer: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M80.9 288l95.1 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-95.1 0c8 72 69 128 143.1 128c79.5 0 144-64.5 144-144s-64.5-144-144-144c-74.1 0-135.2 56-143.1 128zM160 88a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z" />
        <path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM224 160a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM64 88a24 24 0 1 1 48 0A24 24 0 1 1 64 88zM184 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Dryer;