
import { Icon } from "../../index";

/**
 * A component that renders the `ice-skate` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ice-skate?s=solid ice-skate}
 * @preview ![ice-skate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/ice-skate.svg)
 */
const IceSkate: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 336c0 26.5-21.5 48-48 48L80 384c-26.5 0-48-21.5-48-48l0-203.8c0-21.4 14.2-40.3 34.8-46.2L256 32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 64-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 32-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 119.3 29.8C482 232.5 512 270.9 512 315l0 21zm40 72c13.3 0 24 10.7 24 24l0 8c0 39.8-32.2 72-72 72l-96 0-288 0-96 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l72 0 0-48 48 0 0 48 240 0 0-48 48 0 0 48 72 0c13.3 0 24-10.7 24-24l0-8c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default IceSkate;