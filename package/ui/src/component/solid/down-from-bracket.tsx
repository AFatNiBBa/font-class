
import { Icon } from "../../index";

/**
 * A component that renders the `down-from-bracket` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-from-bracket?s=solid down-from-bracket}
 * @preview ![down-from-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/down-from-bracket.svg)
 */
const DownFromBracket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 160l0-64c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64c0-53-43-96-96-96L96 0C43 0 0 43 0 96l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32zm9.9 217.9L196.7 500.7c7.2 7.2 17.1 11.3 27.3 11.3s20.1-4.1 27.3-11.3L374.1 377.9c6.4-6.4 9.9-15 9.9-24c0-18.7-15.2-33.9-33.9-33.9L288 320l0-128c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 128-62.1 0C79.2 320 64 335.2 64 353.9c0 9 3.6 17.6 9.9 24z" />
    </Icon>
);

export default DownFromBracket;