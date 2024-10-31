
import { Icon } from "../../index";

/**
 * A component that renders the `beer-mug-empty` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/beer-mug-empty?s=sharp-thin beer-mug-empty}
 * @preview ![beer-mug-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/beer-mug-empty.svg)
 */
const BeerMugEmpty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M368 48l0 48 0 16 0 352L48 464 48 48l320 0zm16 307.8L384 112l112 0 0 194.8-112 49zM384 464l0-90.8 123.2-53.9 4.8-2.1 0-5.2 0-208 0-8-8 0L384 96l0-48 0-16-16 0L48 32 32 32l0 16 0 416 0 16 16 0 320 0 16 0 0-16zM144 136l0-8-16 0 0 8 0 240 0 8 16 0 0-8 0-240zm72 0l0-8-16 0 0 8 0 240 0 8 16 0 0-8 0-240zm72 0l0-8-16 0 0 8 0 240 0 8 16 0 0-8 0-240z" />
    </Icon>
);

export default BeerMugEmpty;