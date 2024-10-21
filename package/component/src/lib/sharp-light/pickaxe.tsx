
import { Icon } from "../../index";

/**
 * A component that renders the `pickaxe` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pickaxe?s=sharp-light pickaxe}
 * @preview ![pickaxe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/pickaxe.svg)
 */
const Pickaxe: typeof Icon = x => (
    <Icon {...x}>
        <path d="M474.1 324.8c-30.1-61.3-68.7-118-118.8-168.1S248.5 68 187.2 37.9c79-17.4 164.8 6.4 222.8 64.7c57.8 58 81.4 143.5 64.1 222.2zm20.1 44.3c37.7-98.7 13.4-214-61.5-289.1C357.5 4.6 241.8-19.9 142.9 17.9c-1.6 .6-3.2 1.3-4.9 1.9L99.6 35.3c14.5 5.4 28.8 11.1 42.8 17.2C213 83.2 277.3 123.9 332.7 179.3s96.1 119.7 126.8 190.2c6.1 14 11.8 28.3 17.2 42.8L492.2 374c.7-1.6 1.3-3.2 1.9-4.9zM0 456l56 56L341.9 236.7c-6.7-8-13.8-16-21.3-23.9L56.4 467.2 44.8 455.6 299.2 191.4c-7.9-7.5-15.9-14.6-23.9-21.3L0 456zM443.3 20.7L432 9.4 409.4 32l11.3 11.3 48 48L480 102.6 502.6 80 491.3 68.7l-48-48z" />
    </Icon>
);

export default Pickaxe;