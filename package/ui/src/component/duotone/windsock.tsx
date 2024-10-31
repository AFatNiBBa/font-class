
import { Icon, generic } from "../../index";

/**
 * A component that renders the `windsock` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/windsock?s=duotone windsock}
 * @preview ![windsock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/windsock.svg)
 */
const Windsock: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 96l0 48 64 0 0 128-64 0 0 48 64 0 0 8.6c0 18 14.7 32 31.9 32c2.2 0 4.4-.2 6.6-.7l41.5-8.6 0-286.7c-13.8-2.9-27.7-5.8-41.5-8.6c-19.9-4.1-38.5 11-38.5 31.3l0 8.6L64 96zM272 78l0 260c32-6.7 64-13.3 96-20l0-220c-32-6.7-64-13.3-96-20zm160 33.3l0 193.3c18.2-3.8 36.4-7.6 54.5-11.4c14.8-3.1 25.5-16.2 25.5-31.3l0-108c0-15.2-10.6-28.2-25.5-31.3c-18.2-3.8-36.4-7.6-54.5-11.4z" />
        <path d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32L0 480c0 17.7 14.3 32 32 32s32-14.3 32-32L64 32zM208 64.7l0 286.7L272 338l0-260L208 64.7zM368 318l64-13.3 0-193.3L368 98l0 220z" />
    </Icon>
);

export default Windsock;