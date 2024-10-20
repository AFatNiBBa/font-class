
import { Icon } from "../../index";

/**
 * A component that renders the `citrus` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/citrus?s=sharp-regular citrus}
 * @preview ![citrus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/citrus.svg)
 */
const Citrus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 112l0 16 16 0 80 0c53 0 96-43 96-96l0-16 0-16L464 0 384 0c-31 0-58.7 14.7-76.2 37.6c-16.7-3.7-34-5.6-51.8-5.6C123.5 32 16 139.5 16 272s107.5 240 240 240s240-107.5 240-240c0-49.5-15-95.5-40.7-133.7c-13.5 9.1-28.8 15.7-45.3 19.1c23.9 32 38 71.7 38 114.6c0 106-86 192-192 192S64 378 64 272S150 80 256 80c11.2 0 22.2 1 32.9 2.8c-.6 4.3-.9 8.7-.9 13.2l0 16z" />
    </Icon>
);

export default Citrus;