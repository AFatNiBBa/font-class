
import { Icon } from "../../index";

/**
 * A component that renders the `headphones-simple` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/headphones-simple?s=sharp-thin headphones-simple}
 * @preview ![headphones-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/headphones-simple.svg)
 */
const HeadphonesSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 288C16 155.5 123.5 48 256 48s240 107.5 240 240l0 88 0 8 16 0 0-8 0-88C512 146.6 397.4 32 256 32S0 146.6 0 288l0 88 0 8 16 0 0-8 0-88zm144-16l0 192-96 0 0-192 96 0zM64 256l-16 0 0 16 0 192 0 16 16 0 96 0 16 0 0-16 0-192 0-16-16 0-96 0zm288 16l96 0 0 192-96 0 0-192zm96-16l-96 0-16 0 0 16 0 192 0 16 16 0 96 0 16 0 0-16 0-192 0-16-16 0z" />
    </Icon>
);

export default HeadphonesSimple;