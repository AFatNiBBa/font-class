
import { Icon } from "../../index";

/**
 * A component that renders the `spray-can` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spray-can?s=sharp-solid spray-can}
 * @preview ![spray-can](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/spray-can.svg)
 */
const SprayCan: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 0l0 128L96 128 96 0 224 0zM0 256c0-53 43-96 96-96l128 0c53 0 96 43 96 96l0 256L0 512 0 256zm240 80A80 80 0 1 0 80 336a80 80 0 1 0 160 0zM256 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM384 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM448 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM384 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default SprayCan;