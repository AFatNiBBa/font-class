
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bowl-rice` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bowl-rice?s=sharp-duotone-solid bowl-rice}
 * @preview ![bowl-rice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bowl-rice.svg)
 */
const BowlRice: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 176l24 0 16 0 24 0 0 48-24 0-16 0-24 0 0-48zm48-72l24 0 16 0 24 0 0 48-24 0-16 0-24 0 0-48zm48 72l24 0 16 0 24 0 0 48-24 0-16 0-24 0 0-48zM176 32l24 0 16 0 24 0 0 48-24 0-16 0-24 0 0-48zm0 72l24 0 16 0 24 0 0 48-24 0-16 0-24 0 0-48zm48 72l24 0 16 0 24 0 0 48-24 0-16 0-24 0 0-48zM272 32l24 0 16 0 24 0 0 48-24 0-16 0-24 0 0-48zm0 72l24 0 16 0 24 0 0 48-24 0-16 0-24 0 0-48zm48 72l24 0 16 0 24 0 0 48-24 0-16 0-24 0 0-48zm48-72l24 0 16 0 24 0 0 48-24 0-16 0-24 0 0-48zm48 72l24 0 16 0 24 0 0 48-24 0-16 0-24 0 0-48z" />
        <path d="M512 256L0 256l0 24c0 67 39.2 124.9 96 151.8L96 480l320 0 0-48.2c56.8-27 96-84.8 96-151.8l0-24z" />
    </Icon>
);

export default BowlRice;