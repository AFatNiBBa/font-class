
import { Icon } from "../../index";

/**
 * A component that renders the `mug-saucer` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mug-saucer?s=sharp-thin mug-saucer}
 * @preview ![mug-saucer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/mug-saucer.svg)
 */
const MugSaucer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M440 48l24 0 0 320-352 0 0-320 328 0zm40 176l0-176 24 0c48.6 0 88 39.4 88 88s-39.4 88-88 88l-24 0zm0 144l0-128 24 0c57.4 0 104-46.6 104-104s-46.6-104-104-104l-24 0-16 0-24 0L112 32 96 32l0 16 0 320 0 16 16 0 352 0 16 0 0-16zM8 464l-8 0 0 16 8 0 560 0 8 0 0-16-8 0L8 464z" />
    </Icon>
);

export default MugSaucer;