
import { Icon } from "../../index";

/**
 * A component that renders the `brush` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brush?s=sharp-thin brush}
 * @preview ![brush](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/brush.svg)
 */
const Brush: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M128 368l-16 0-96 0L0 368l0-16L0 16 0 0 16 0 368 0l16 0 0 16 0 336 0 16-16 0-96 0-16 0 0 16 0 112 0 16-16 0-96 0-16 0 0-16 0-112 0-16zm0-16l16 0 0 16 0 128 96 0 0-128 0-16 16 0 112 0 0-80L16 272l0 80 112 0zm240-96l0-240-96 0 0 88 0 8-16 0 0-8 0-88-64 0 0 72 0 8-16 0 0-8 0-72L96 16l0 104 0 8-16 0 0-8L80 16 16 16l0 240 352 0zM176 448a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default Brush;