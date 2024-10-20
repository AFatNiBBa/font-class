
import { Icon, generic } from "../../index";

/**
 * A component that renders the `beer-mug-empty` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/beer-mug-empty?s=sharp-duotone-solid beer-mug-empty}
 * @preview ![beer-mug-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/beer-mug-empty.svg)
 */
const BeerMugEmpty: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 32l352 0 0 64 96 0 32 0 0 32 0 176 0 20.8-19 8.4L384 381.7l0 98.3L32 480 32 32zm96 96l0 16 0 224 0 16 32 0 0-16 0-224 0-16-32 0zm64 0l0 16 0 224 0 16 32 0 0-16 0-224 0-16-32 0zm64 0l0 16 0 224 0 16 32 0 0-16 0-224 0-16-32 0zm128 32l0 151.6 64-28.4L448 160l-64 0z" />
        <path d="M160 128l0 16 0 224 0 16-32 0 0-16 0-224 0-16 32 0zm64 0l0 16 0 224 0 16-32 0 0-16 0-224 0-16 32 0zm64 0l0 16 0 224 0 16-32 0 0-16 0-224 0-16 32 0z" />
    </Icon>
);

export default BeerMugEmpty;