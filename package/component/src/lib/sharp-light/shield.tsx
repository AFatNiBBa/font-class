
import { Icon } from "../../index";

/**
 * A component that renders the `shield` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield?s=sharp-light shield}
 * @preview ![shield](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/shield.svg)
 */
const Shield: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 34.3L48.5 114.9C45.8 160.5 53 231.7 83.2 301.2s83.4 137.3 172.8 175.9c89.4-38.7 142.6-106.4 172.8-175.9s37.4-140.7 34.7-186.3L256 34.3zM494.3 92.5l1.2 20.5c2.9 50-4.9 126.3-37.3 200.9c-32.7 75.2-91.1 150-189.4 192.6L256 512l-12.7-5.5C144.9 463.9 86.6 389.2 53.9 313.9C21.4 239.3 13.6 162.9 16.6 113l1.2-20.5L36.9 85 244.4 4.5 256 0l11.6 4.5L475.1 85l19.2 7.4z" />
    </Icon>
);

export default Shield;