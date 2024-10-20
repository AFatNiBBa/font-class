
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-z` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-z?s=duotone square-z}
 * @preview ![square-z](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-z.svg)
 */
const SquareZ: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm112 56c0-.4 0-.8 0 0z" />
        <path d="M112 152c0-13.3 10.7-24 24-24l176 0c9.3 0 17.8 5.4 21.8 13.9s2.6 18.5-3.5 25.6L187.7 336 312 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-176 0c-9.3 0-17.8-5.4-21.8-13.9s-2.6-18.5 3.5-25.6L260.3 176 136 176c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default SquareZ;