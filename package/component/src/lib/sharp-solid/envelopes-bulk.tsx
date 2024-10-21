
import { Icon } from "../../index";

/**
 * A component that renders the `envelopes-bulk` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelopes-bulk?s=sharp-solid envelopes-bulk}
 * @preview ![envelopes-bulk](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/envelopes-bulk.svg)
 */
const EnvelopesBulk: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M480 0l0 128-256 0-32 0 0 32 0 64-96 0L96 0 480 0zM224 192l0-32 32 0 352 0 0 256-224 0 0-160 0-32-32 0-128 0 0-32zm128 64l0 32 0 18.1L192 420.3 32 306.1 32 256l288 0 32 0zm192-32l-64 0 0 64 64 0 0-64zM352 345.4L352 512 32 512l0-166.6L182.7 453l9.3 6.6 9.3-6.6L352 345.4z" />
    </Icon>
);

export default EnvelopesBulk;