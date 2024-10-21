
import { Icon } from "../../index";

/**
 * A component that renders the `trash-slash` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-slash?s=sharp-light trash-slash}
 * @preview ![trash-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/trash-slash.svg)
 */
const TrashSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M509.7 96L544 96l0-32-32 0-32.1 0-47.1 0L397.6 7.5 392.9 0 384 0 256 0l-8.9 0-4.7 7.5L207.1 64l-27 0 40.5 32 257 0L463.9 288.1l30.4 24L509.7 96zM452.9 442.5L450.2 480l-260.4 0L171.2 220.1l-34-26.8L160 512l320 0 3.3-45.6-30.4-24zM244.9 64l20-32 110.3 0 20 32L244.9 64zM40.4 18L27.8 8.1 8.1 33.4l12.6 9.8L599.8 494.3l12.6 9.8 19.7-25.2L619.5 469 40.4 18z" />
    </Icon>
);

export default TrashSlash;