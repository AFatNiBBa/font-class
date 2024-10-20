
import { Icon, generic } from "../../index";

/**
 * A component that renders the `object-exclude` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-exclude?s=duotone object-exclude}
 * @preview ![object-exclude](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/object-exclude.svg)
 */
const ObjectExclude: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 160c-35.3 0-64 28.7-64 64l0 128 128 0c35.3 0 64-28.7 64-64l0-128-128 0zm80 48l0 96-96 0 0-96 96 0z" />
        <path d="M64 0C28.7 0 0 28.7 0 64L0 288c0 35.3 28.7 64 64 64l96 0 0 96c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64l-96 0 0-96c0-35.3-28.7-64-64-64L64 0zM352 160l0 128c0 35.3-28.7 64-64 64l-128 0 0-128c0-35.3 28.7-64 64-64l128 0z" />
    </Icon>
);

export default ObjectExclude;