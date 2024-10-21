
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clone` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clone?s=duotone clone}
 * @preview ![clone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/clone.svg)
 */
const Clone: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224L0 448c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-96-64 0 0 96L64 448l0-224 96 0 0-64-96 0c-35.3 0-64 28.7-64 64z" />
        <path d="M160 288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64V288z" />
    </Icon>
);

export default Clone;