
import { Icon } from "../../index";

/**
 * A component that renders the `windsock` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/windsock?s=sharp-solid windsock}
 * @preview ![windsock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/windsock.svg)
 */
const Windsock: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 32L64 0 0 0 0 32 0 480l0 32 64 0 0-32 0-160 64 0 0 48 80-16.7 0-286.7L128 48l0 48L64 96l0-64zm64 112l0 128-64 0 0-128 64 0zM272 78l0 260 96-20 0-220L272 78zM512 288l0-160-80-16.7 0 193.3L512 288z" />
    </Icon>
);

export default Windsock;