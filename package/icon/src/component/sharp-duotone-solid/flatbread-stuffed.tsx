
import { Icon, generic } from "../../index";

/**
 * A component that renders the `flatbread-stuffed` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flatbread-stuffed?s=sharp-duotone-solid flatbread-stuffed}
 * @preview ![flatbread-stuffed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/flatbread-stuffed.svg)
 */
const FlatbreadStuffed: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M13 282.9L75 365.7l.5 25.5L133.8 333c-13.7-19.5-21.8-43.3-21.8-69c0-66.3 53.7-120 120-120c25.7 0 49.5 8.1 69 21.8L422.5 44.2l-75.9 9L255.9 3.4 185.1 78.8 83.6 98.9 77.8 202.2 13 282.9zM144 264c0 16.8 4.7 32.5 12.9 45.9l121-121C264.5 180.7 248.8 176 232 176c-48.6 0-88 39.4-88 88z" />
        <path d="M464.3 47.7c106.2 106.2 106.2 278.4 0 384.7s-278.4 106.2-384.7 0L464.3 47.7zM272 448a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm80-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-48-48a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default FlatbreadStuffed;