
import { Icon } from "../../index";

/**
 * A component that renders the `memo` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/memo?s=thin memo}
 * @preview ![memo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/memo.svg)
 */
const Memo: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 16C37.5 16 16 37.5 16 64l0 384c0 26.5 21.5 48 48 48l256 0c26.5 0 48-21.5 48-48l0-384c0-26.5-21.5-48-48-48L64 16zM0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm72 64l240 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L72 144c-4.4 0-8-3.6-8-8s3.6-8 8-8zm0 96l240 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L72 240c-4.4 0-8-3.6-8-8s3.6-8 8-8zm0 96l144 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L72 336c-4.4 0-8-3.6-8-8s3.6-8 8-8z" />
    </Icon>
);

export default Memo;