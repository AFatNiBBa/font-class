
import { Icon } from "../../index";

/**
 * A component that renders the `faucet` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/faucet?s=sharp-light faucet}
 * @preview ![faucet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/faucet.svg)
 */
const Faucet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M240 80l0-16-32 0 0 16 0 48L80 128l-16 0 0 32 16 0 128 0 0 48-32 0-6.6 0-4.7 4.7L121.4 256 16 256 0 256l0 32 16 0 112 0 6.6 0 4.7-4.7L182.6 240l82.7 0 43.3 43.3 4.7 4.7 6.6 0 48 0c61.9 0 112 50.1 112 112l0 16-64 0 0-16c0-26.5-21.5-48-48-48l-60.8 0-9.2 0-4.6 8c-13.9 24-39.7 40-69.3 40s-55.5-16.1-69.3-40l-4.6-8-9.2 0L16 352 0 352l0 32 16 0 116.1 0c20.2 29 53.8 48 91.9 48s71.7-19 91.9-48l52.1 0c8.8 0 16 7.2 16 16l0 32 0 16 16 0 96 0 16 0 0-16 0-32c0-79.5-64.5-144-144-144l-41.4 0-43.3-43.3-4.7-4.7-6.6 0-32 0 0-48 128 0 16 0 0-32-16 0-128 0 0-48z" />
    </Icon>
);

export default Faucet;