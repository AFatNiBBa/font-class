
import { Icon } from "../../index";

/**
 * A component that renders the `curling-stone` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/curling-stone?s=sharp-regular curling-stone}
 * @preview ![curling-stone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/curling-stone.svg)
 */
const CurlingStone: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M176 32l24 0 192 0 24 0 0 48-24 0L224 80l0 64 256 0 0 64 32 0 64 64 0 40 0 8 0 96-64 64L64 480 0 416l0-96 0-8 0-40 64-64 32 0 0-64 80 0 0-88 0-24zM48 312l0 8 480 0 0-8 0-20.1L492.1 256 83.9 256 48 291.9 48 312zm0 56l0 28.1L83.9 432l408.2 0L528 396.1l0-28.1L48 368z" />
    </Icon>
);

export default CurlingStone;