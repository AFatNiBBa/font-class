
import { Icon } from "../../index";

/**
 * A component that renders the `at` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/at?s=sharp-regular at}
 * @preview ![at](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/at.svg)
 */
const At: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208l32 0 0 48-32 0C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256l0 96 0 24-24 0-48 0c-36.9 0-69.6-17.8-90-45.4c-22 27.6-55.9 45.4-94 45.4c-66.3 0-120-53.7-120-120s53.7-120 120-120c27 0 51.9 8.9 72 24l0-8 48 0 0 24 0 80 0 8c0 35.3 28.7 64 64 64l24 0 0-72c0-114.9-93.1-208-208-208zm72 208a72 72 0 1 0 -144 0 72 72 0 1 0 144 0z" />
    </Icon>
);

export default At;