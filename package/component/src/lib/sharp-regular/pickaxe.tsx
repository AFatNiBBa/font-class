
import { Icon } from "../../index";

/**
 * A component that renders the `pickaxe` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pickaxe?s=sharp-regular pickaxe}
 * @preview ![pickaxe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/pickaxe.svg)
 */
const Pickaxe: typeof Icon = x => (
    <Icon {...x}>
        <path d="M332.7 179.3c50 50 88.1 107.3 117.6 169.9c1.5 3.2 3 6.4 4.4 9.6c7.9 17.5 15.2 35.3 21.9 53.5L492.2 374c3.7-9.1 6.9-18.4 9.5-27.8c22.6-80.8 6.1-169.5-43.8-236.9L480 88 424 32 402.7 54.1s0 0 0 0C335.3 4.2 246.6-12.3 165.8 10.3c-9.4 2.6-18.7 5.8-27.8 9.5L99.6 35.3c18.2 6.7 36.1 14 53.5 21.9c3.2 1.5 6.4 2.9 9.6 4.4c62.6 29.5 119.9 67.6 169.9 117.6zm33.9-33.9c-38.6-38.6-81-70.5-126.3-97c58.3 .4 116.2 23.3 158.3 65.5c41.9 42.1 64.6 99.7 65 157.7c-26.5-45.2-58.4-87.6-97-126.3zm-32.1 82.8c-7.7-8.8-15.8-17.6-24.5-26.2s-17.4-16.8-26.2-24.5L0 472l40 40L334.6 228.2z" />
    </Icon>
);

export default Pickaxe;