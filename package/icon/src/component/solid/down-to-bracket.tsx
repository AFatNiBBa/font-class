
import { Icon } from "../../index";

/**
 * A component that renders the `down-to-bracket` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-to-bracket?s=solid down-to-bracket}
 * @preview ![down-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/down-to-bracket.svg)
 */
const DownToBracket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M378.1 198.6L249.5 341.4c-6.1 6.7-14.7 10.6-23.8 10.6l-3.5 0c-9.1 0-17.7-3.8-23.8-10.6L69.9 198.6c-3.8-4.2-5.9-9.8-5.9-15.5C64 170.4 74.4 160 87.1 160l72.9 0 0-128c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 128 72.9 0c12.8 0 23.1 10.4 23.1 23.1c0 5.7-2.1 11.2-5.9 15.5zM64 352l0 64c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 64c0 53-43 96-96 96L96 512c-53 0-96-43-96-96l0-64c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
    </Icon>
);

export default DownToBracket;