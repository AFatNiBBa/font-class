
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-to-dot` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-to-dot?s=sharp-regular arrows-to-dot}
 * @preview ![arrows-to-dot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrows-to-dot.svg)
 */
const ArrowsToDot: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280 24l0-24L232 0l0 24 0 86.1L201 79l-17-17L150.1 96l17 17 72 72 17 17 17-17 72-72 17-17L328 62.1 311 79l-31 31L280 24zM416 361.9L449.9 328l-17-17-31-31 86.1 0 24 0 0-48-24 0-86.1 0 31-31 17-17L416 150.1l-17 17-72 72-17 17 17 17 72 72 17 17zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM113 167l-17-17L62.1 184l17 17 31 31L24 232 0 232l0 48 24 0 86.1 0L79 311l-17 17L96 361.9l17-17 72-72 17-17-17-17-72-72zm37.1 249L184 449.9l17-17 31-31 0 86.1 0 24 48 0 0-24 0-86.1 31 31 17 17L361.9 416l-17-17-72-72-17-17-17 17-72 72-17 17z" />
    </Icon>
);

export default ArrowsToDot;