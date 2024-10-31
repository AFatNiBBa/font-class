
import { Icon, generic } from "../../index";

/**
 * A component that renders the `id-card` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/id-card?s=sharp-duotone-solid id-card}
 * @preview ![id-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/id-card.svg)
 */
const IdCard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 128L0 480l576 0 0-352L0 128zM64 416l32-64 160 0 32 64L64 416zM240 256a64 64 0 1 1 -128 0 64 64 0 1 1 128 0zm112-64l16 0 128 0 16 0 0 32-16 0-128 0-16 0 0-32zm0 64l16 0 128 0 16 0 0 32-16 0-128 0-16 0 0-32zm0 64l16 0 128 0 16 0 0 32-16 0-128 0-16 0 0-32z" />
        <path d="M576 32L0 32l0 96 576 0 0-96zM240 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm16 96L96 352 64 416l224 0-32-64z" />
    </Icon>
);

export default IdCard;