
import { Icon } from "../../index";

/**
 * A component that renders the `ice-skate` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ice-skate?s=sharp-solid ice-skate}
 * @preview ![ice-skate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/ice-skate.svg)
 */
const IceSkate: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 240l0 144L32 384 32 96 256 32l0-32 64 0 0 96-48 0-16 0 0 32 16 0 48 0 0 32-48 0-16 0 0 32 16 0 48 0 192 48zm64 168l0 24 0 56 0 24-24 0-144 0-288 0-96 0L0 512l0-48 24 0 72 0 0-24 0-24 48 0 0 24 0 24 240 0 0-24 0-24 48 0 0 24 0 24 96 0 0-32 0-24 48 0z" />
    </Icon>
);

export default IceSkate;