
import { Icon, generic } from "../../index";

/**
 * A component that renders the `train` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/train?s=sharp-duotone-solid train}
 * @preview ![train](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/train.svg)
 */
const Train: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M2.8 512l90.5 0 64-64-90.5 0L25.4 489.4 2.8 512zM64 64l0 160 320 0 0-160L64 64zM290.7 448l64 64 90.5 0-22.6-22.6L381.3 448l-90.5 0z" />
        <path d="M0 0L448 0l0 448L0 448 0 0zM64 64l0 160 320 0 0-160L64 64zM224 384a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default Train;