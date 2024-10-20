
import { Icon, generic } from "../../index";

/**
 * A component that renders the `windsock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/windsock?s=sharp-duotone-solid windsock}
 * @preview ![windsock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/windsock.svg)
 */
const Windsock: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 96l0 48 64 0 0 128-64 0 0 48 64 0 0 48 80-16.7 0-286.7c-26.7-5.6-53.3-11.1-80-16.7l0 48L64 96zM272 78l0 260c32-6.7 64-13.3 96-20l0-220c-32-6.7-64-13.3-96-20zm160 33.3l0 193.3c26.7-5.6 53.3-11.1 80-16.7l0-160c-26.7-5.6-53.3-11.1-80-16.7z" />
        <path d="M64 32L64 0 0 0 0 32 0 480l0 32 64 0 0-32L64 32zM208 64.7l0 286.7L272 338l0-260L208 64.7zM368 318l64-13.3 0-193.3L368 98l0 220z" />
    </Icon>
);

export default Windsock;