
import { Icon } from "../../index";

/**
 * A component that renders the `memo` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/memo?s=sharp-regular memo}
 * @preview ![memo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/memo.svg)
 */
const Memo: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 48l0 416 288 0 0-416L48 48zM0 0L48 0 336 0l48 0 0 48 0 416 0 48-48 0L48 512 0 512l0-48L0 48 0 0zM120 128l144 0 24 0 0 48-24 0-144 0-24 0 0-48 24 0zm0 96l144 0 24 0 0 48-24 0-144 0-24 0 0-48 24 0zm0 96l48 0 24 0 0 48-24 0-48 0-24 0 0-48 24 0z" />
    </Icon>
);

export default Memo;