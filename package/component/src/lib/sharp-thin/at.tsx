
import { Icon } from "../../index";

/**
 * A component that renders the `at` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/at?s=sharp-thin at}
 * @preview ![at](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/at.svg)
 */
const At: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 256C16 123.5 123.5 16 256 16s240 107.5 240 240l0 20 0 68-68 0c-37.6 0-68-30.4-68-68l0-20 0-88 0-8-16 0 0 8 0 32.5c-18.4-29.2-50.9-48.5-88-48.5c-57.4 0-104 46.6-104 104s46.6 104 104 104c40.4 0 75.3-23 92.6-56.6C359.9 336.4 391.2 360 428 360l76 0 8 0 0-8 0-76 0-20C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512l8 0 0-16-8 0C123.5 496 16 388.5 16 256zm152 0a88 88 0 1 1 176 0 88 88 0 1 1 -176 0z" />
    </Icon>
);

export default At;