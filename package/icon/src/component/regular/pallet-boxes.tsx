
import { Icon } from "../../index";

/**
 * A component that renders the `pallet-boxes` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pallet-boxes?s=regular pallet-boxes}
 * @preview ![pallet-boxes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/pallet-boxes.svg)
 */
const PalletBoxes: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M272 48L112 48l0 160 160 0 0-160zM112 0L272 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48L64 48C64 21.5 85.5 0 112 0zM528 112l-96 0 0 96 96 0 0-96zM432 64l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zM0 344c0-13.3 10.7-24 24-24l64 0 232 0 232 0 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-40 0 0 96 40 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0-232 0L88 512l-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l40 0 0-96-40 0c-13.3 0-24-10.7-24-24zM112 464l184 0 0-96-184 0 0 96zm232 0l184 0 0-96-184 0 0 96z" />
    </Icon>
);

export default PalletBoxes;