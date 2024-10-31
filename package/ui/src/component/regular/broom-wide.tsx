
import { Icon } from "../../index";

/**
 * A component that renders the `broom-wide` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/broom-wide?s=regular broom-wide}
 * @preview ![broom-wide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/broom-wide.svg)
 */
const BroomWide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M505 41c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L335 143l-12.9-12.9c-20.2-20.2-51.4-24.6-76.3-10.7L16.4 246.9C6.3 252.5 0 263.2 0 274.8c0 8.5 3.4 16.6 9.3 22.6L214.7 502.7c6 6 14.1 9.3 22.6 9.3c11.6 0 22.3-6.3 27.9-16.4L392.6 266.2c13.9-25 9.5-56.1-10.7-76.3L369 177 505 41zM323.6 291.6l-90 162.1L137 357.1l18-53.9c2.1-6.3-3.9-12.2-10.1-10.1L90.9 311 58.4 278.5l162.1-90L323.6 291.6z" />
    </Icon>
);

export default BroomWide;