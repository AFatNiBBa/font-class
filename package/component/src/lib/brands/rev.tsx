
import { Icon } from "../../index";

/**
 * A component that renders the `rev` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rev?s=brands rev}
 * @preview ![rev](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/rev.svg)
 */
const Rev: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M289.67 274.89a65.57 65.57 0 1 1-65.56-65.56 65.64 65.64 0 0 1 65.56 65.56zm139.55-5.05h-.13a204.69 204.69 0 0 0-74.32-153l-45.38 26.2a157.07 157.07 0 0 1 71.81 131.84C381.2 361.5 310.73 432 224.11 432S67 361.5 67 274.88c0-81.88 63-149.27 143-156.43v39.12l108.77-62.79L210 32v38.32c-106.7 7.25-191 96-191 204.57 0 111.59 89.12 202.29 200.06 205v.11h210.16V269.84z" />
    </Icon>
);

export default Rev;