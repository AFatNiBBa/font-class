
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sprinkler` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sprinkler?s=sharp-duotone-solid sprinkler}
 * @preview ![sprinkler](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sprinkler.svg)
 */
const Sprinkler: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 24a24 24 0 1 0 48 0A24 24 0 1 0 0 24zM0 128a24 24 0 1 0 48 0A24 24 0 1 0 0 128zM0 232a24 24 0 1 0 48 0A24 24 0 1 0 0 232zM64 72a24 24 0 1 0 48 0A24 24 0 1 0 64 72zm0 112a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm64-56a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm208 0a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm64-56a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm0 112a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zM464 24a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm0 104a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm0 104a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z" />
        <path d="M288 96l0-32-64 0 0 32 0 160L96 256l0 40 96 88 0 128 128 0 0-128 96-88 0-40-128 0 0-160z" />
    </Icon>
);

export default Sprinkler;