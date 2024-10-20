
import { Icon } from "../../index";

/**
 * A component that renders the `bread-slice` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bread-slice?s=regular bread-slice}
 * @preview ![bread-slice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bread-slice.svg)
 */
const BreadSlice: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 208c-8.8 0-16-7.2-16-16c0-34.5 24.6-62.3 74.9-83.9C171.8 87.2 229.2 80 256 80s84.2 7.2 133.1 28.1C439.4 129.7 464 157.5 464 192c0 8.8-7.2 16-16 16c-26.5 0-48 21.5-48 48l0 176-288 0 0-176c0-26.5-21.5-48-48-48zm384 96l0-48c35.3 0 64-28.7 64-64C512 64 320 32 256 32S0 64 0 192c0 35.3 28.7 64 64 64l0 48 0 128c0 26.5 21.5 48 48 48l288 0c26.5 0 48-21.5 48-48l0-128z" />
    </Icon>
);

export default BreadSlice;