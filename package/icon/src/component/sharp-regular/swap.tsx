
import { Icon } from "../../index";

/**
 * A component that renders the `swap` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/swap?s=sharp-regular swap}
 * @preview ![swap](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/swap.svg)
 */
const Swap: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 160l-48 0 0-40 7.5-8L95.2 35.2 128 0l32.8 35.2L232.5 112l7.5 8 0 40-48 0-40 0 0 272 144 0 0-376 0-24 24 0 192 0 24 0 0 24 0 156 0 140 40 0 48 0 0 40-7.5 8-71.7 76.8L512 512l-32.8-35.2L407.5 400l-7.5-8 0-40 48 0 40 0 0-140 0-132L344 80l0 376 0 24-24 0-192 0-24 0 0-24 0-296-40 0zm102.9-48L128 70.3 89.1 112l77.7 0zm384 288l-77.7 0L512 441.7 550.9 400z" />
    </Icon>
);

export default Swap;