
import { Icon } from "../../index";

/**
 * A component that renders the `tickets` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tickets?s=sharp-regular tickets}
 * @preview ![tickets](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/tickets.svg)
 */
const Tickets: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 80l0-48 48 0 448 0 48 0 0 48 0 40 0 48c-22.1 0-40 17.9-40 40s17.9 40 40 40l0 48 0 40 0 48-48 0-448 0-48 0 0-48 0-40 0-48c22.1 0 40-17.9 40-40s-17.9-40-40-40l0-48 0-40zm48 54.2c24.1 15.7 40 42.9 40 73.8s-15.9 58.1-40 73.8l0 54.2 448 0 0-54.2c-24.1-15.7-40-42.9-40-73.8s15.9-58.1 40-73.8L592 80 144 80l0 54.2zM48 96l0 24 0 312 472 0 24 0 0 48-24 0L24 480 0 480l0-24L0 120 0 96l48 0zm224 80l0 64 192 0 0-64-192 0zm-48-48l48 0 192 0 48 0 0 48 0 64 0 48-48 0-192 0-48 0 0-48 0-64 0-48z" />
    </Icon>
);

export default Tickets;