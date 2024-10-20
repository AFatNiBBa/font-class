
import { Icon } from "../../index";

/**
 * A component that renders the `train` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/train?s=sharp-solid train}
 * @preview ![train](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/train.svg)
 */
const Train: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 0L0 0 0 448l66.7 0L25.4 489.4 2.7 512l90.5 0 64-64 133.5 0 64 64 90.5 0-22.6-22.6L381.3 448l66.7 0L448 0zM384 64l0 160L64 224 64 64l320 0zM176 336a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
    </Icon>
);

export default Train;