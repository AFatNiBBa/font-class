
import { Icon } from "../../index";

/**
 * A component that renders the `square-z` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-z?s=light square-z}
 * @preview ![square-z](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-z.svg)
 */
const SquareZ: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm144 32l160 0c6 0 11.5 3.3 14.2 8.7s2.3 11.7-1.2 16.6L175.1 352 304 352c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-6 0-11.5-3.4-14.2-8.7s-2.3-11.7 1.2-16.6L272.9 160 144 160c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default SquareZ;