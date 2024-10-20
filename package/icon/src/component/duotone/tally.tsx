
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tally` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tally?s=duotone tally}
 * @preview ![tally](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/tally.svg)
 */
const Tally: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 211.6L96 296.9 96 64zm0 300.4c21.3-7.1 42.7-14.2 64-21.3L160 448c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-83.6zM224 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 168.9-64 21.3L224 64zm0 257.7c21.3-7.1 42.7-14.2 64-21.3L288 448c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-126.3zM352 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 126.3-64 21.3L352 64zm0 215.1c21.3-7.1 42.7-14.2 64-21.3L416 448c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-168.9zM480 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 83.6-64 21.3L480 64zm0 172.4c21.3-7.1 42.7-14.2 64-21.3L544 448c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-211.6z" />
        <path d="M638.4 149.9c5.6 16.8-3.5 34.9-20.2 40.5l-576 192c-16.8 5.6-34.9-3.5-40.5-20.2s3.5-34.9 20.2-40.5l576-192c16.8-5.6 34.9 3.5 40.5 20.2z" />
    </Icon>
);

export default Tally;