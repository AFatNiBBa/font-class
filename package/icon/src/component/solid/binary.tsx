
import { Icon } from "../../index";

/**
 * A component that renders the `binary` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/binary?s=solid binary}
 * @preview ![binary](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/binary.svg)
 */
const Binary: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M336 32l0 128 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48 0-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-83.6-5.9 2c-16.8 5.6-34.9-3.5-40.5-20.2s3.5-34.9 20.2-40.5l48-16C303.6-1.6 314.4 0 322.7 6s13.3 15.7 13.3 26zM112 320l0 128 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48 0-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-83.6-5.9 2c-16.8 5.6-34.9-3.5-40.5-20.2s3.5-34.9 20.2-40.5l48-16c9.8-3.3 20.5-1.6 28.8 4.4s13.3 15.7 13.3 26zM0 64C0 28.7 28.7 0 64 0l64 0c35.3 0 64 28.7 64 64l0 96c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64L0 64zm128 0L64 64l0 96 64 0 0-96zM256 288l64 0c35.3 0 64 28.7 64 64l0 96c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-96c0-35.3 28.7-64 64-64zm0 64l0 96 64 0 0-96-64 0z" />
    </Icon>
);

export default Binary;