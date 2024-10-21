
import { Icon } from "../../index";

/**
 * A component that renders the `binary-slash` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/binary-slash?s=sharp-light binary-slash}
 * @preview ![binary-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/binary-slash.svg)
 */
const BinarySlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M432 224l64 0 16 0 0-32-16 0-48 0 0-176 0-16L432 0 368 0 352 0l0 32 16 0 48 0 0 160-48 0-16 0 0 7.7L382.8 224l49.2 0zM320 16l0-16L304 0 144 0 128 0l0 16 0 6.9 32 25.3L160 32l128 0 0 117.2 32 25.3L320 16zm0 480l0 16 16 0 160 0 16 0 0-16 0-6.9-32-25.3 0 16.1-128 0 0-117.2-32-25.3L320 496zM144 288l-16 0 0 32 16 0 48 0 0 160-48 0-16 0 0 32 16 0 64 0 64 0 16 0 0-32-16 0-48 0 0-176 0-16-16 0-64 0zM40.4 18L27.8 8.1 8.1 33.4l12.6 9.8L599.8 494.3l12.6 9.8 19.7-25.2L619.5 469 40.4 18z" />
    </Icon>
);

export default BinarySlash;