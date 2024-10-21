
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sandwich` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sandwich?s=sharp-duotone-solid sandwich}
 * @preview ![sandwich](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sandwich.svg)
 */
const Sandwich: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M1.2 240.7l15.5 62.1 31-7.8 88-22 112 29.9 8.2 2.2 8.2-2.2 112-29.9 88 22 31 7.8 15.5-62.1-31-7.8-96-24-8-2-8 2.1L256 238.9 144.2 209.1l-8-2.1-8 2-96 24-31 7.8zM224 336c32 16 64 32 96 48c32-16 64-32 96-48l-192 0z" />
        <path d="M512 64L0 64 0 176l512 0 0-112zM224 336l-32 0L0 336 0 448l512 0 0-112-64 0-32 0-96 48-96-48z" />
    </Icon>
);

export default Sandwich;