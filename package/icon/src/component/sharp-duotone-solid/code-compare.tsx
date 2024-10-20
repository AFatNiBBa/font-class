
import { Icon, generic } from "../../index";

/**
 * A component that renders the `code-compare` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-compare?s=sharp-duotone-solid code-compare}
 * @preview ![code-compare](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/code-compare.svg)
 */
const CodeCompare: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M48 192c0-70.7 57.3-128 128-128l16 0 0-64 32 0 96 96-96 96-32 0 0-64-16 0c-35.3 0-64 28.7-64 64l0 160-8 0-48 0-8 0 0-160zM192 416l96-96 32 0 0 64 16 0c35.3 0 64-28.7 64-64l0-160c2.7 0 5.3 0 8 0l48 0 8 0 0 160c0 70.7-57.3 128-128 128l-16 0 0 64-32 0-96-96z" />
        <path d="M408 56l0 48 48 0 0-48-48 0zM352 0l56 0 48 0 56 0 0 56 0 48 0 56-56 0-48 0-56 0 0-56 0-48 0-56zM56 408l0 48 48 0 0-48-48 0zM0 352l56 0 48 0 56 0 0 56 0 48 0 56-56 0-48 0L0 512l0-56 0-48 0-56z" />
    </Icon>
);

export default CodeCompare;