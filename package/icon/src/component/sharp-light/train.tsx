
import { Icon } from "../../index";

/**
 * A component that renders the `train` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/train?s=sharp-light train}
 * @preview ![train](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/train.svg)
 */
const Train: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 32l384 0 0 192L32 224 32 32zm0 224l384 0 0 160-73.4 0-6.6 0-224 0-6.6 0L32 416l0-160zM374.6 448l41.4 0 32 0 0-32 0-384 0-32L416 0 32 0 0 0 0 32 0 416l0 32 32 0 41.4 0L20.7 500.7 9.4 512l45.3 0 64-64 210.7 0 64 64 45.3 0-11.3-11.3L374.6 448zM256 336a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default Train;