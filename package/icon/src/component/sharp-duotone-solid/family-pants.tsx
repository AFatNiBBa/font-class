
import { Icon, generic } from "../../index";

/**
 * A component that renders the `family-pants` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/family-pants?s=sharp-duotone-solid family-pants}
 * @preview ![family-pants](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/family-pants.svg)
 */
const FamilyPants: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M24 352l40 0 0 160 112 0 0-64-32 0 0-32 0-160 0-32 32 0 16 0c-10-13.4-16-30-16-48c0-5.5 .6-10.8 1.6-16L32 160 24 352zM64 64a64 64 0 1 0 128 0A64 64 0 1 0 64 64zm256 0a64 64 0 1 0 128 0A64 64 0 1 0 320 64zm0 160l16 0 32 0 0 32 0 160 0 32-32 0 0 64 112 0 0-160 40 0-8-192-145.6 0c1 5.2 1.6 10.5 1.6 16c0 18-6 34.6-16 48z" />
        <path d="M208 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm128 80l0 160-32 0 0 96-96 0 0-96-32 0 0-160 160 0z" />
    </Icon>
);

export default FamilyPants;