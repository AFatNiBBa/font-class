
import { Icon } from "../../index";

/**
 * A component that renders the `beer-mug-empty` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/beer-mug-empty?s=sharp-solid beer-mug-empty}
 * @preview ![beer-mug-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/beer-mug-empty.svg)
 */
const BeerMugEmpty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32l352 0 0 64 96 0 32 0 0 32 0 176 0 20.8-19 8.4L384 381.7l0 98.3L32 480 32 32zM384 311.6l64-28.4L448 160l-64 0 0 151.6zM160 144l0-16-32 0 0 16 0 224 0 16 32 0 0-16 0-224zm64 0l0-16-32 0 0 16 0 224 0 16 32 0 0-16 0-224zm64 0l0-16-32 0 0 16 0 224 0 16 32 0 0-16 0-224z" />
    </Icon>
);

export default BeerMugEmpty;