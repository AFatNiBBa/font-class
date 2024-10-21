
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grapes` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grapes?s=sharp-duotone-solid grapes}
 * @preview ![grapes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/grapes.svg)
 */
const Grapes: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M320 80c0-40 40-80 40-80s40 32 40 80c0 32-8 40-8 40s8-8 40-8c48 0 80 40 80 40s-40 40-80 40s-55.3-7.3-80-32s-32-40-32-80z" />
        <path d="M248 208a56 56 0 1 0 0-112 56 56 0 1 0 0 112zm-80-32A56 56 0 1 0 56 176a56 56 0 1 0 112 0zM88 368a56 56 0 1 0 0-112 56 56 0 1 0 0 112zM56 512a56 56 0 1 0 0-112 56 56 0 1 0 0 112zm144-32a56 56 0 1 0 0-112 56 56 0 1 0 0 112zm192-80a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zM224 344a56 56 0 1 0 0-112 56 56 0 1 0 0 112zm192-80a56 56 0 1 0 -112 0 56 56 0 1 0 112 0z" />
    </Icon>
);

export default Grapes;