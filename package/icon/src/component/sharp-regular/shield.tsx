
import { Icon } from "../../index";

/**
 * A component that renders the `shield` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield?s=sharp-regular shield}
 * @preview ![shield](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/shield.svg)
 */
const Shield: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 51.5L64.1 126c-1 43.5 6.9 106.9 33.8 168.8c28.2 64.9 77 127.7 158.1 164.8c81.1-37.1 129.9-99.9 158.1-164.8C441 232.9 448.9 169.5 448 126L256 51.5zm238.3 41l1.2 20.5c2.9 50-4.9 126.3-37.3 200.9c-32.7 75.2-91.1 150-189.4 192.6L256 512l-12.7-5.5C144.9 463.9 86.6 389.2 53.9 313.9C21.4 239.3 13.6 162.9 16.6 113l1.2-20.5L36.9 85 244.4 4.5 256 0l11.6 4.5L475.1 85l19.2 7.4z" />
    </Icon>
);

export default Shield;