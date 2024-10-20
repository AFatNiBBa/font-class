
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cup-straw` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cup-straw?s=sharp-duotone-solid cup-straw}
 * @preview ![cup-straw](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cup-straw.svg)
 */
const CupStraw: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M32 192l320 0L320 512 64 512 32 192z" />
        <path d="M224 0L205 0l-4.4 18.5L174.9 128 32 128 0 128l0 64 32 0 320 0 32 0 0-64-32 0-127.8 0L243 48l37 0 24 0 0-48L280 0 224 0z" />
    </Icon>
);

export default CupStraw;