
import { Icon } from "../../index";

/**
 * A component that renders the `memo-pad` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/memo-pad?s=thin memo-pad}
 * @preview ![memo-pad](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/memo-pad.svg)
 */
const MemoPad: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 128l0 320c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-320L16 128zm0-16l416 0 0-48c0-26.5-21.5-48-48-48L64 16C37.5 16 16 37.5 16 64l0 48zM448 64l0 48 0 8 0 8 0 320c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 128l0-8 0-8L0 64C0 28.7 28.7 0 64 0L384 0c35.3 0 64 28.7 64 64zM104 208l240 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-240 0c-4.4 0-8-3.6-8-8s3.6-8 8-8zm0 96l240 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-240 0c-4.4 0-8-3.6-8-8s3.6-8 8-8zm0 96l144 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-144 0c-4.4 0-8-3.6-8-8s3.6-8 8-8z" />
    </Icon>
);

export default MemoPad;