
import { Icon } from "../../index";

/**
 * A component that renders the `grapes` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grapes?s=sharp-solid grapes}
 * @preview ![grapes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/grapes.svg)
 */
const Grapes: typeof Icon = x => (
    <Icon {...x}>
        <path d="M360 0s-40 40-40 80s7.3 55.3 32 80s40 32 80 32s80-40 80-40s-32-40-80-40c-32 0-40 8-40 8s8-8 8-40c0-48-40-80-40-80zM304 152a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zM112 232a56 56 0 1 0 0-112 56 56 0 1 0 0 112zm32 80A56 56 0 1 0 32 312a56 56 0 1 0 112 0zM112 456A56 56 0 1 0 0 456a56 56 0 1 0 112 0zm144-32a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zm80 32a56 56 0 1 0 0-112 56 56 0 1 0 0 112zM280 288a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zm80 32a56 56 0 1 0 0-112 56 56 0 1 0 0 112z" />
    </Icon>
);

export default Grapes;