
import { Icon } from "../../index";

/**
 * A component that renders the `tickets-simple` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tickets-simple?s=sharp-regular tickets-simple}
 * @preview ![tickets-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/tickets-simple.svg)
 */
const TicketsSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 32l0 48 0 40 0 48c22.1 0 40 17.9 40 40s-17.9 40-40 40l0 48 0 40 0 48 48 0 448 0 48 0 0-48 0-40 0-48c-22.1 0-40-17.9-40-40s17.9-40 40-40l0-48 0-40 0-48-48 0L144 32 96 32zm88 176c0-30.9-15.9-58.1-40-73.8L144 80l448 0 0 54.2c-24.1 15.7-40 42.9-40 73.8s15.9 58.1 40 73.8l0 54.2-448 0 0-54.2c24.1-15.7 40-42.9 40-73.8zM48 120l0-24L0 96l0 24L0 456l0 24 24 0 496 0 24 0 0-48-24 0L48 432l0-312z" />
    </Icon>
);

export default TicketsSimple;